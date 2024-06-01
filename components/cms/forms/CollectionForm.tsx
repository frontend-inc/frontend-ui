import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../context'
import { useDocuments } from 'frontend-js'
import { Form } from '../../../components'
import { useAlerts } from '../../../hooks'
import { useRouter } from 'next/router'

export type CollectionFormProps = {
	handle: string
	resource?: any
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
		handle,
		resource: _resource,
		buttonText = 'Submit',
		fields,
		url,
		href,
		onSuccessMessage = 'Submitted successfully!',
	} = props

	const { showAlertSuccess } = useAlerts()

	const {
		delayedLoading,
		errors,
		findOne,
		resource,
		setResource,
		update,
		create,
		flattenDocument,
		handleDataChange,
		removeAttachment,
	} = useDocuments({
		url,
	})

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
		if (_resource) {
			setResource(_resource)
		} else if (handle) {
			findOne(handle)
		}
	}, [_resource, handle])

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
