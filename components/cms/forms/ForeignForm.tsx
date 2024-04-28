import React, { useState } from 'react'
import { useResource } from 'frontend-js'
import { Box, Button } from '@mui/material'
import { Form, Placeholder } from '../../../components'
import { flattenDocument } from '../../../helpers'
import { SYSTEM_FIELDS } from '../../../constants'

export type ForeignFormProps = {
	handle: string
	url: string
	foreignUrl?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	children?: React.ReactElement[]
}

const ForeignForm: React.FC<ForeignFormProps> = (props) => {
	const {
		handle,
		buttonText = 'Submit',
		fields,
		url,
		foreignUrl,
	} = props

	const [submitted, setSubmitted] = useState(false)

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
			let addResp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				addResp = await addLinks(handle, [resp.id])
				if (addResp?.id) {
					setSubmitted(true)
				}
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

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
			enableBorder
			icon={'Check'}
			title="Success"
			description="Your form has been submitted"
			actions={
				<Button
					color="secondary"
					variant="contained"
					onClick={() => setSubmitted(false)}
				>
					Done
				</Button>
			}
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
