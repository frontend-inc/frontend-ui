import React from 'react'
import { Fade, Typography, Stack } from '@mui/material'
import FormInput from '../FormInput'
import { flattenDocument } from '../../../../helpers'
import { get } from 'lodash'
import FormWizardInput from './FormWizardInput'

export type FormWizardProps = {
	field: {
		variant: string
		title: string
		description: string
		label: string
		placeholder: string
		name: string
		options: any
	}
	handleChange: (ev: any) => void
	handleRemove: (name: string) => void
	resource: any
	fadeIn: boolean
	setResource: (resource: any) => void
}

const WIZARD_FIELD_VARIENTS = [
	'multiple_choice',
	'multiple_choice_images',
	'single_choice',
	'single_choice_image',
]

const FormWizardField: React.FC<FormWizardProps> = (props) => {
	const { field, fadeIn, resource, setResource, handleChange, handleRemove } =
		props

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

	return (
		<Fade in={fadeIn} timeout={350}>
			<Stack direction="column" spacing={3}>
				<Stack direction="column" spacing={1}>
					<Typography sx={sx.title} variant="h4" color="text.primary">
						{field?.title}
					</Typography>
					<Typography
						sx={sx.description}
						variant="body1"
						color="text.secondary"
					>
						{field?.description}
					</Typography>
				</Stack>
				{field && (
					<>
						{WIZARD_FIELD_VARIENTS.includes(field.variant) ? (
							<FormWizardInput
								name={field.name}
								label={field.label}
								placeholder={field.placeholder}
								variant={field.variant}
								options={field.options}
								value={get(flattenDocument(resource), field.name)}
								handleChange={handleChange}
							/>
						) : (
							<FormInput
								name={field.name}
								label={field.label}
								placeholder={field.placeholder}
								variant={field.variant}
								options={field.options}
								value={get(flattenDocument(resource?.data), field.name)}
								handleChange={handleDataChange}
								handleRemove={handleRemove}
							/>
						)}
					</>
				)}
			</Stack>
		</Fade>
	)
}

export default FormWizardField

const sx = {
	title: {
		textAlign: 'center',
		width: '100%',
	},
	description: {
		textAlign: 'center',
		width: '100%',
	},
}
