import React from 'react'
import FormInput from '../FormInput'
import FormWizardInputWrapper from './FormWizardInputWrapper'
import FormWizardInput from './FormWizardInput'
import { get } from 'lodash'

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
	handleAddAttachment: (field: string, attachmentId: number) => void
	handleRemoveAttachment: (field: string) => void
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
	const { field, fadeIn, resource, handleChange, handleRemove } = props

	return (
		<FormWizardInputWrapper
			fadeIn={fadeIn}
			title={field.title}
			description={field.description}
		>
			{field && (
				<>
					{WIZARD_FIELD_VARIENTS.includes(field.variant) ? (
						<FormWizardInput
							name={field.name}
							label={field.label}
							placeholder={field.placeholder}
							variant={field.variant}
							options={field.options}
							value={get(resource, field.name)}
							handleChange={handleChange}
						/>
					) : (
						<FormInput
							name={field.name}
							label={field.label}
							placeholder={field.placeholder}
							variant={field.variant}
							options={field.options}
							value={get(resource, field.name)}
							handleChange={handleChange}
							handleRemove={handleRemove}
						/>
					)}
				</>
			)}
		</FormWizardInputWrapper>
	)
}

export default FormWizardField

const sx = {
	title: {
		textAlign: 'left',
		width: '100%',
	},
	description: {
		textAlign: 'left',
		width: '100%',
	},
}
