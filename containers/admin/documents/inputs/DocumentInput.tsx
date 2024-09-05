import React from 'react'
import {
	Autosuggest,
	LocationInput,
	ArrayInput,
	CheckboxInput,
	DateInput,
	JSONInput,
	RatingInput,
	TextInput,
	ShopifyProductInput,
  ShopifyProductsInput
} from '../../../../components'
import ReferenceInput from '../references/ReferenceInput'
import StorageInput from '../storage/StorageInput'
import InputWrapper  from './InputWrapper'
import { AiChatModal } from '../../../../components'
import { COUNTRIES, STATES } from '../../../../constants'
import { Stack } from '@mui/material'

type DocumentInputProps = {
	errors?: any
	field: any
	value: any
	placeholder?: string
	handleChange: (e: any) => void
	document?: any

  collection?: any
	handleAddReferences?: (items: any[]) => void
	handleRemoveReferences?: (items: any[]) => void
	handleAddAttachment?: (field: any, file: any) => void
	handleRemoveAttachment?: (field: any, file: any) => void

}

const DocumentInput: React.FC<DocumentInputProps> = (props) => {
	
  const { 
    errors, 
    field, 
    value, 
    handleChange, 
    document,
    collection,
    handleAddReferences,
    handleRemoveReferences,
    handleAddAttachment,
    handleRemoveAttachment 
  } = props

	const { variant, name, label, options } = field || {}

	let componentMapper = {
		array: ArrayInput,
		country: Autosuggest,
		state: Autosuggest,
		string: TextInput,
		url: TextInput,    
		text: TextInput,
		location: LocationInput,
		number: TextInput,
		price: TextInput,
		date: DateInput,
		datetime: DateInput,
		boolean: CheckboxInput,
		select: Autosuggest,
		rating: RatingInput,
		json: JSONInput,
		shopify: ShopifyProductInput,
    shopify_products: ShopifyProductsInput,
    file: StorageInput,
		image: StorageInput,
    video: StorageInput,
    habtm: ReferenceInput
	}

	const Component = componentMapper[variant] || TextInput

	let inputProps = {
		array: {
			value: value || [],
		},
    shopify_products: {
      value: value || [],
      height: 180,
			width: 180,
    },  
		location: {
			enablePosition: true,
			lat: document?.lat,
			lng: document?.lng,
			darkTheme: true,
			height: 180,
			width: 180,
			zoom: 15,
		},
		country: {
			options: COUNTRIES,
		},
		state: {
			options: STATES,
		},
		tags: {
      value: value || [],
			freeSolo: true,
		},
		text: {
			multiline: true,
			rows: 6,
		},
		select: {
			options:
				options?.map((opt) => ({
					value: opt,
					label: opt,
				})) || [],
		},
		number: {
			type: 'number',
		},
		price: {
			type: 'number',
		},
    habtm: {
      field,
      document,
      collection,
      handleAddReferences,
      handleRemoveReferences,
      enableMultipleSelect: true
    },
    image: {
      field,
      collection,
      handleAddAttachment,
      handleRemoveAttachment
    },
    file: {
      field,
      collection,
      handleAddAttachment,
      handleRemoveAttachment
    },
    video: {
      field,
      collection,
      handleAddAttachment,
      handleRemoveAttachment
    }        
	}[variant]  

	return (
		<InputWrapper title={label} label={variant}>
			<Stack sx={sx.stack} direction="row" spacing={1} alignItems="center">
				<Component
					errors={errors}
					name={name}
					value={value}
					handleChange={handleChange}
					{...inputProps}
				/>
				{['string', 'text'].includes(variant) && name !== 'handle' && (
					<AiChatModal name={name} value={value} handleChange={handleChange} />
				)}
			</Stack>
		</InputWrapper>
	)
}

export default DocumentInput

const sx = {
	stack: {
		width: '100%',
	},
}
