import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { Loader, FormFields } from '../..'
import { useAlerts, useFetchForm } from '../../../hooks'
import { useRouter } from 'next/router'

export type RemoteFormProps = {
  loading?: boolean
	resource: any
  parentResource?: any
	url: string
	href?: string
	buttonText?: string
	onSuccessMessage?: string
  handleSuccess?: (resource: any) => void
}

const RemoteForm: React.FC<RemoteFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const { href } = props || {}
  const onSuccess = () => {
    if(href){
      router.push(`${clientUrl}${href}`)
    }
  }

	const {    
		resource: _resource,
    parentResource,
		buttonText = 'Submit',
		url,
		onSuccessMessage = 'Submitted successfully!',
    handleSuccess=onSuccess
	} = props

	const { showAlertSuccess } = useAlerts()

  const { 
    fields  
  } = useFetchForm({
    url
  })

	const {
		delayedLoading: loading,
		errors,
		resource,
		setResource,
    findOne,
		update,
		create,
		removeAttachment,
		addReferences,
    handleChange
	} = useResource({
		name: 'document',
		url,
	})

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
          await addReferences(resp.id, [parentResource.id])
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
    if(_resource?.id){
      findOne(_resource?.id)
    }else{
      setResource({
        title: ''
      })
    }
  }, [_resource])

  if(!fields || fields?.length == 0) return null;
  if(_resource?.id && !resource?.id) return(
    <Loader loading />
  )
	return (
		<FormFields
			loading={loading}
			errors={errors}
			fields={fields}
			resource={resource}
			handleChange={handleChange}
			handleRemove={handleRemove}
			handleSubmit={handleSubmit}
			buttonText={buttonText}
		/>
	)
}

export default RemoteForm
