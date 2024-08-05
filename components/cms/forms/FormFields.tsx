import React from 'react'
import { Stack, Button } from '@mui/material'
import FormFieldInput from './FormFieldInput'
import { get } from 'lodash'
import { FormFieldType } from '../../../types'
import { IconLoading } from '../..'
import { validateFieldConditions } from '../../../helpers'

export type FormProps = {
	loading?: boolean
	errors: any
	fields: FormFieldType[]
	resource: any
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleRemove: (name: string) => void
	handleSubmit?: () => void
	buttonText?: string
}

const FormFields: React.FC<FormProps> = (props) => {
	const {
		errors,
		loading,
		fields,
		resource,
		handleChange,
		handleRemove,
		handleSubmit,
		buttonText = 'Submit',
	} = props

	return (
		<Stack spacing={1} sx={sx.root}>
			{fields?.map((field, index) => {
				if (!validateFieldConditions(field?.conditions || [], resource)) {
					return null
				}
				return (
					<FormFieldInput
						key={index}
						resource={resource}
						errors={errors}
						field={field}
						value={get(resource, field.name) || field?.default}
						//@ts-ignore
						handleChange={handleChange}
						handleRemove={handleRemove}
					/>
				)
			})}
			{handleSubmit && (
				<Button
					size="large"
					variant="contained"
					onClick={handleSubmit}
					disabled={loading}
					endIcon={
						<IconLoading color="primary.contrastText" loading={loading} />
					}
				>
					{buttonText}
				</Button>
			)}
		</Stack>
	)
}

export default FormFields

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
