import React from 'react'
import { FormFieldType, SyntheticEventType } from '../../../types'
import FormInput from './FormInput'

type FormFieldInputProps = {
	resource: any
	field: FormFieldType
	errors?: any
	value?: any | any[]
	url?: string
	foreignUrl?: string
	contentType?: string
	fields?: FormFieldType[]  
	handleChange: (e: SyntheticEventType) => void
	handleRemove?: (name: string) => void
}

const FormFieldInput: React.FC<FormFieldInputProps> = (props) => {
	const { 
    resource, 
    field, 
    errors, 
    value, 
    handleChange, 
    handleRemove 
  } = props

	const {
		name,
		label,
		placeholder,
		variant,
		options,
		url,
		foreignUrl,
		contentType,
		displayField,
		valueParam,
		fields,
	} = field

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
			displayField={displayField}
			valueParam={valueParam}
      fields={fields}

			// Reference props
			url={url}
			foreignUrl={foreignUrl}
			resource={resource}
			contentType={contentType}
			
		/>
	)
}

export default FormFieldInput
