import React from 'react'
import { SyntheticEventType } from '../../../types'
import FormInput from './FormInput'

type FormFieldInputProps = {
	field: any
	errors?: any
	value?: any | any[]
	handleChange: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
}

const FormFieldInput: React.FC<FormFieldInputProps> = (props) => {
	const { field, errors, value, handleChange, handleRemove } = props

	const { name, label, placeholder, variant, options } = field

	return (
		<FormInput
      errors={errors}
			name={name}
			label={label}
			placeholder={placeholder}
			variant={variant}
			options={options}
			value={value}
			handleChange={handleChange}
			handleRemove={handleRemove}
		/>
	)
}

export default FormFieldInput
