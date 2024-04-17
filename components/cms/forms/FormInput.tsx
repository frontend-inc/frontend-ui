import React from 'react'
import {
	ArrayInput,
	DateInput,
	ImageInput,
	JSONInput,
	RatingInput,
	SwitchInput,
	TextInput,
} from '../../../components'
import { SyntheticEventType } from '../../../types'

type FormInputProps = {
	variant: any
	name: string
	label?: string
	errors?: any
	value?: any | any[]
	options: any
	placeholder?: string
	handleChange: (e: SyntheticEventType) => void
	handleRemove: (name: string) => void
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
		handleRemove,
	} = props

	let componentMapper = {
		array: ArrayInput,
		string: TextInput,
		url: TextInput,
		text: TextInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: SwitchInput,
		select: ArrayInput,
		rating: RatingInput,
		image: ImageInput,
		json: JSONInput,
	}

	let componentProps = {
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
			options: options,
		},
		number: {
			type: 'number',
		},
		price: {
			type: 'number',
		},
		image: {
			handleRemove,
		},
	}

	let InputComponent = componentMapper[variant]

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value}
			handleChange={handleChange}
			placeholder={placeholder}
			{...componentProps[variant]}
		/>
	)
}

export default FormInput
