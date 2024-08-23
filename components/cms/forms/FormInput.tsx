import React from 'react'
import {
	AttachmentInput,
	Autosuggest,
	ArrayInput,
	DateInput,
	EmailInput,
	ImageInput,
	JSONInput,
	LocationInput,
	PhoneInput,
	RatingInput,
	SwitchInput,
	TextInput,
	URLInput,
	NoSpaceInput,
	ShopifyProductInput,
	ReferenceInput,
	RemoteAutosuggest,
} from '../../../components'
import { FormFieldType, OptionType, SyntheticEventType } from '../../../types'

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
	resource?: any
	url?: string
	foreignUrl?: string
	contentType?: string
	query?: any
	displayField?: string //Autosuggest has an optional display field param
	valueParam?: string // MetafieldAutosuggest has an optional value param
	fields?: FormFieldType[]
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
		resource,
		url,
		foreignUrl,
		fields,
		contentType,
		query = {},
		displayField,
		valueParam,
	} = props

	let componentMapper = {
		autosuggest: RemoteAutosuggest,
		array: ArrayInput,
		string: TextInput,
		file: AttachmentInput,
		email: EmailInput,
		phone: PhoneInput,
		url: URLInput,
		text: TextInput,
		nospace: NoSpaceInput,
		location: LocationInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: SwitchInput,
		select: Autosuggest,
		rating: RatingInput,
		image: ImageInput,
		json: JSONInput,
		shopify: ShopifyProductInput,
		habtm: ReferenceInput,
	}

	let inputProps = {
		autosuggest: {
			url,
			displayField,
			valueParam,
			defaultQuery: query,
		},
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
			// Handle both array of strings and array of objects
			options: options?.map((option: OptionType) => ({
				label: option.label || option,
				value: option.value || option,
			})),
		},
		number: {
			type: 'number',
		},
		boolean: {
			label: null,
			placeholder: label,
		},
		price: {
			type: 'number',
		},
		image: {
			handleRemove,
		},
		video: {
			handleRemove,
		},
		audio: {
			handleRemove,
		},
		file: {
			handleRemove,
		},
		habtm: {
			resource,
			url,
			foreignUrl,
			contentType,
			fields,
		},
	}

	let InputComponent = componentMapper[variant] || TextInput

	return (
		<InputComponent
			errors={errors}
			label={label}
			name={name}
			value={value || ''}
			handleChange={handleChange}
			placeholder={placeholder}
			{...inputProps[variant]}
		/>
	)
}

export default FormInput
