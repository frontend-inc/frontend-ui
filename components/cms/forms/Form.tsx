import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Stack, Box, Button } from '@mui/material'
import { IconLoading, Placeholder } from '../..'
import FormFieldInput from './FormFieldInput'
import { SYSTEM_FIELDS } from '../../../constants/index'
import { get } from 'lodash'

export type FormProps = {
	handle: string	
	url: string
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	children?: React.ReactElement[]
}

const Form: React.FC<FormProps> = (props) => {
	const { handle, buttonText = 'Submit', fields, url } = props

	const [submitted, setSubmitted] = useState(false)

	const {
		loading,
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
			<Stack spacing={1} sx={sx.root}>
				{fields?.map((field, index) =>
					SYSTEM_FIELDS.includes(field.name) ? (
						<FormFieldInput
							key={index}
							field={field}
							value={get(resource, field.name)}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					) : (
						<FormFieldInput
							key={index}
							field={field}
							value={get(resource?.data, field.name)}
							handleChange={handleDataChange}
						/>
					)
				)}
				<Button
					size="large"
					variant="contained"
					onClick={handleSubmit}
					disabled={loading}
					endIcon={<IconLoading color="primary" loading={loading} />}
				>
					{buttonText}
				</Button>
			</Stack>
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

export default Form

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
