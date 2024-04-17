import React from 'react'
import { SyntheticEventType } from '../../../../types'
import MultipleChoiceInput from '../inputs/MultipleChoiceInput'
import MultipleChoiceImagesInput from '../inputs/MultipleChoiceImagesInput'
import SingleChoiceInput from '../inputs/SingleChoiceInput'
import SingleChoiceImageInput from '../inputs/SingleChoiceImageInput'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	options: any
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
}

const FormInput: React.FC<FormInputProps> = (props) => {
	const {
		variant,
		name,
		label,
		errors,
		value,
		options,
		placeholder,
		handleChange,
	} = props

	let componentMapper = {
		single_choice: SingleChoiceInput,
		multiple_choice: MultipleChoiceInput,
		single_choice_image: SingleChoiceImageInput,
		multiple_choice_images: MultipleChoiceImagesInput,
	}

	let InputComponent = componentMapper[variant]

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value}
			options={options}
			handleChange={handleChange}
			placeholder={placeholder}
		/>
	)
}

export default FormInput
