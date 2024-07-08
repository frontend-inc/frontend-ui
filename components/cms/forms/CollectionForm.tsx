import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { 
  flattenDocument, 
  changeDocumentValue, 
  useResource 
} from 'frontend-js'
import { Form } from '../../../components'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

export type CollectionFormProps = {
  resource: any 	
	url: string
	foreignUrl?: string
	href?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
  filterRelated?: boolean
	onSuccessMessage?: string
}

const CollectionForm: React.FC<CollectionFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		resource: _resource,    
		buttonText = 'Submit',
		fields,
		url,		
		href,
    filterRelated=false,
		onSuccessMessage = 'Submitted successfully!',
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
    addLinks 
  } = useResource({
    name: 'document',
    url
  })

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? 
        ev.target.checked : 
        ev.target.value    
    setResource(prev => changeDocumentValue(prev, name, value))
	}

	const handleRemove = async (name) => {
    if(resource?.id)
		  await removeAttachment(resource.id, name)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
        // Handle associated resources
        if(_resource?.id && filterRelated == true){
          let submitResp = await addLinks(resp.id, [_resource.id])
          if (submitResp?.id) {
            if (onSuccessMessage) {
              showAlertSuccess(onSuccessMessage)
            }
            if (href) {
              router.push(`${clientUrl}${href}`)
            }
          }
        }
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

  useEffect(() => {
    setResource({
      title: ''
    })
  })

	return (
		<Form
			loading={loading}
			errors={errors}
			fields={fields}
			resource={flattenDocument(resource)}
			handleChange={handleDataChange}
			handleRemove={handleRemove}
			handleSubmit={handleSubmit}
			buttonText={buttonText}
		/>
	)
}

export default CollectionForm