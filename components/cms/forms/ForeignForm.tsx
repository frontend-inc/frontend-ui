import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { Form } from '../../../components'
import { flattenDocument } from '../../../helpers'
import { SYSTEM_FIELDS } from '../../../constants'
import { useAlerts } from '../../../hooks'

export type ForeignFormProps = {
	handle: string
	url: string
	foreignUrl?: string
  navigateUrl?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	onSuccessMessage?: string
}

const ForeignForm: React.FC<ForeignFormProps> = (props) => {

  const router = useRouter()
  const { clientUrl } = useContext(AppContext)

	const {
		handle,
		buttonText = 'Submit',
		fields,
		url,
		foreignUrl,
    navigateUrl,
    onSuccessMessage='Submitted successfully!' 
	} = props
	

  const { showAlertSuccess } = useAlerts()

	const { loading, addLinks } = useResource({
		name: 'document',
		url,
	})

	const {
    errors,
		resource,
		setResource,
		update,
		create,
		removeAttachment,
	} = useResource({
		name: 'document',
		url: foreignUrl,
	})

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		if (SYSTEM_FIELDS.includes(name)) {
			setResource((prev) => ({
				...prev,
				[name]: value,
			}))
		} else {
			setResource((prev) => ({
				...prev,
				data: {
					...prev.data,
					[name]: value,
				},
			}))
		}
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
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
				let addResp = await addLinks(handle, [resp.id])				
        if(addResp?.id){
          if(onSuccessMessage){
            showAlertSuccess(onSuccessMessage)
          }        
          if(navigateUrl){
            router.push(`${clientUrl}${navigateUrl}`)
          }
        }        
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	return (
    <Form 
      loading={loading}
      errors={errors}
      fields={fields}
      resource={flattenDocument(resource)}
      handleChange={handleDataChange}
      handleRemove={handleRemove}
      handleSubmit={ handleSubmit }
      buttonText={buttonText}
    />
)
}

export default ForeignForm

const sx = {
	root: {
		width: '100%',
	},
	form: {
		width: '100%',
	},
}
