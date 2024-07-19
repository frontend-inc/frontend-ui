import React from 'react'
import {
	AttachmentInput,
	Autosuggest,
	ArrayInput,
	LocationInput,
	DateInput,
	ImageInput,
	JSONInput,
	RatingInput,
	SwitchInput,
	TextInput,
  NoSpaceInput,
	ShopifyProductInput,
  ReferenceInput
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
	} = props

	let componentMapper = {
		array: ArrayInput,
		string: TextInput,
		file: AttachmentInput,
		url: TextInput,
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
    habtm: ReferenceInput 
	}

	let inputProps = {
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
      // Handle both array of strings and array of objects
			options: options?.map((option: OptionType) => ({
        label: option.label || option,
        value: option.value || option
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
      fields
    }
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
