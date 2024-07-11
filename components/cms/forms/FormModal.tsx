import React, { useEffect } from 'react'
import { flattenDocument, changeDocumentValue, useResource } from 'frontend-js'
import { FormFields, Drawer } from '../../../components'
import { useAlerts } from '../../../hooks'
import { FormProps } from './Form'

export type FormModalProps = FormProps & {
  title?: string
  open: boolean
  handleClose: () => void	
}

const FormModal: React.FC<FormModalProps> = (props) => {

	const {
    title,
    open,
    handleClose,
		resource: _resource,
    parentResource,
		buttonText = 'Submit',
		fields,
		url,
		onSuccessMessage = 'Submitted successfully!',
    handleSuccess
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading: loading,
		errors,
		resource,
		setResource,
		update,
		create,
		removeAttachment,
		addLinks,
	} = useResource({
		name: 'document',
		url,
	})

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		setResource((prev) => changeDocumentValue(prev, name, value))
	}

	const handleRemove = async (name) => {
		if (resource?.id) await removeAttachment(resource.id, name)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
        // Handle associated resources
        if (parentResource?.id) {
          await addLinks(resp.id, [parentResource.id])
        }        
			}
			if (resp?.id) {
        if (onSuccessMessage) {
          showAlertSuccess(onSuccessMessage)
        }
        if(handleSuccess){
          handleSuccess(resp)
        }
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

  useEffect(() => {
    if(_resource){
      setResource(_resource)
    }else{
      setResource({
        title: ''
      })
    }
  }, [_resource])

	return (
    <Drawer 
      open={open}
      handleClose={handleClose}
      title={title}
    >
      <FormFields
        loading={loading}
        errors={errors}
        fields={fields}
        resource={flattenDocument(resource)}
        handleChange={handleDataChange}
        handleRemove={handleRemove}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      />
    </Drawer>
	)
}

export default FormModal
