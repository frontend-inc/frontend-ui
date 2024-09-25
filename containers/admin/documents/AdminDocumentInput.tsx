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
  StateInput,
  CountryInput,
	ShopifyProductsInput,
} from '../../../components'
import ReferenceInput from './references/ReferenceInput'
import ProductsInput from './products/ProductsInput'
import InputWrapper from './inputs/InputWrapper'
import { MediaInput, AiChatModal } from '../../../components'
import { Stack } from '@mui/material'
import { ProductType } from '../../../types'

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
  handleAddProducts?: (products: ProductType[]) => void
  handleRemoveProducts?: (products: ProductType[]) => void
  handleUpdateProductPositions?: (sorted: number[]) => void
}

const AdminDocumentInput: React.FC<DocumentInputProps> = (props) => {
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
		handleRemoveAttachment,
    handleAddProducts,
    handleRemoveProducts,
    handleUpdateProductPositions
	} = props

	const { variant, name, label, options } = field || {}

	let componentMapper = {
		array: ArrayInput,
		country: CountryInput,
		state: StateInput,
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
		products: ProductsInput,
		shopify_products: ShopifyProductsInput,
		file: MediaInput,
		image: MediaInput,
		video: MediaInput,
		habtm: ReferenceInput,
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
    products: {
      document,
      value: value || [],
      handleAddProducts,
      handleRemoveProducts,
      handleUpdateProductPositions
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
			enableMultipleSelect: true,
		},
		image: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
		file: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
		video: {
			field,
			collection,
			handleAddAttachment,
			handleRemoveAttachment,
		},
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

export default AdminDocumentInput

const sx = {
	stack: {
		width: '100%',
	},
}
