import React, { useContext, useEffect } from 'react'
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
	href?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	url: string
	onSuccessMessage?: string
}

const CollectionForm: React.FC<CollectionFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		buttonText = 'Submit',
		fields,
		url,
		href,
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
	} = useResource({
		url,
    name: 'document'
	})

  const handleDataChange = (ev) => {
    const { name, value } = ev.target
    setResource((prev) => changeDocumentValue(prev, name, value))
  }

	const handleRemove = async (name) => {
		if (resource?.id) {
			await removeAttachment(resource?.id, name)
		}
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
				showAlertSuccess(onSuccessMessage)
				if (href) {
					router.push(`${clientUrl}${href}`)
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
  }, [])

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
