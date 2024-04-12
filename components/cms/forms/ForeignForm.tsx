import React, { useState } from 'react'
import { useResource } from 'frontend-js'
import { Stack, Box, Button } from '@mui/material'
import { IconLoading, Placeholder } from '../..'
import FormField from './FormFieldInput'
import { SYSTEM_FIELDS } from '../../../constants/index'
import { get } from 'lodash'

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
		variant = 'contained',
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
		loading: foreignLoading,
		resource,
		setResource,
		update,
		create,
		handleChange,
		removeAttachment,
	} = useResource({
		name: 'document',
		url: foreignUrl,
	})

	const handleDataChange = (ev) => {
		const { name } = ev.target
		const value =
			ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
		setResource((prev) => ({
			...prev,
			data: {
				...prev.data,
				[name]: value,
			},
		}))
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleSubmit = async (e) => {
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
			<Stack spacing={1} sx={sx.form}>
				{fields?.map((field) =>
					SYSTEM_FIELDS.includes(field.name) ? (
						<FormField
							key={field.id}
							field={field}
							value={get(resource, field.name)}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					) : (
						<FormField
							key={field.id}
							field={field}
							value={get(resource?.data, field.name)}
							handleChange={handleDataChange}
						/>
					)
				)}
				<Button
					variant={variant}
					onClick={handleSubmit}
					disabled={loading}
					endIcon={<IconLoading color="primary" loading={foreignLoading} />}
				>
					{buttonText}
				</Button>
			</Stack>
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
