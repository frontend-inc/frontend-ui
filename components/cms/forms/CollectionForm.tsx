import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../context'
import { useDocuments } from 'frontend-js'
import { Form } from '../../../components'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

export type CollectionFormProps = {
	handle: string
	url: string
	navigateUrl?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	contentType: string
	onSuccessMessage?: string
}

const CollectionForm: React.FC<CollectionFormProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		handle,
		buttonText = 'Submit',
		fields,
		contentType,
		navigateUrl,
		onSuccessMessage = 'Submitted successfully!',
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading,
		errors,
		findOne,
		resource,
		update,
		create,
		flattenDocument,
		handleDataChange,
		removeAttachment,
	} = useDocuments({
		collection: contentType,
	})

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
				showAlertSuccess(onSuccessMessage)
				if (navigateUrl) {
					router.push(`${clientUrl}${navigateUrl}`)
				}
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

	useEffect(() => {
		if (handle) {
			findOne(handle)
		}
	}, [handle])

	return (
		<Form
			loading={delayedLoading}
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

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
