import React, { useEffect } from 'react'
import { useResource } from 'frontend-js'
import { flattenDocument } from '../../../helpers'
import { SYSTEM_FIELDS } from '../../../constants'
import { Form } from '../../../components'
import { useAlerts } from '../../../hooks'

export type CollectionFormProps = {
	handle: string
	url: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
  onSuccessMessage?: string
}

const CollectionForm: React.FC<CollectionFormProps> = (props) => {
	
  const { 
    handle, 
    buttonText = 'Submit', 
    fields,
    url,
    onSuccessMessage='Submitted successfully!' 
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
		removeAttachment,
	} = useResource({
		name: 'document',
		url,
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
				showAlertSuccess(onSuccessMessage)
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
      handleSubmit={ handleSubmit }
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
