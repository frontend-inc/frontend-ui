import React, { useState } from 'react'
import { useResource } from 'frontend-js'
import { Stack, Button } from '@mui/material'
import { ButtonLoader, Placeholder } from '../..'
import { Check } from 'lucide-react'
import FormField from './FormField'
import { SYSTEM_FIELDS } from '../../../constants/index'
import { get } from 'lodash'

type FormProps = {
	handle: string
	url: string
	foreignUrl?: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	children?: React.ReactElement[]
}

const FormHasMany: React.FC<FormProps> = (props) => {
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
		<Stack spacing={1} sx={sx.root}>
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
				endIcon={<ButtonLoader color="primary" loading={foreignLoading} />}
			>
				{buttonText}
			</Button>
		</Stack>
	) : (
		<Placeholder
			enableBorder
			icon={<Check size={32} />}
			title="Success"
			description="Your form has been submitted"
			actions={
				<Button
					color="secondary"
					variant="outlined"
					onClick={() => setSubmitted(false)}
				>
					Done
				</Button>
			}
		/>
	)
}

export default FormHasMany

const sx = {
	root: {
		width: '100%',
	},
}
