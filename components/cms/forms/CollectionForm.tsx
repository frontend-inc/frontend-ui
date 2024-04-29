import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Box, Button } from '@mui/material'
import { Placeholder } from '../..'
import { flattenDocument } from '../../../helpers'
import { SYSTEM_FIELDS } from '../../../constants'
import { Form } from '../../../components'

export type CollectionFormProps = {
	handle: string
	url: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	children?: React.ReactElement[]
}

const CollectionForm: React.FC<CollectionFormProps> = (props) => {
	const { handle, buttonText = 'Submit', fields, url } = props

	const [submitted, setSubmitted] = useState(false)

	const {
		loading,
    errors,
		findOne,
		resource,
		setResource,
		update,
		create,
		handleChange,
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
				setSubmitted(true)
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

	return !submitted ? (
		<Box sx={sx.root}>
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
		</Box>
	) : (
		<Placeholder
			icon={'CheckCircle'}
			title="Success"
			description="Your form has been submitted"
			actions={
				<Button variant="contained" onClick={() => setSubmitted(false)}>
					Done
				</Button>
			}
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
