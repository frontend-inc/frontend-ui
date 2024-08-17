import * as COLORS from '@mui/material/colors'
import { FieldVariantType } from '../../types'

export const AUDIO_FIELD: FieldVariantType = {
	icon: 'Headphones',
	category: 'Media',
	variant: 'audio',
	db_type: 'string',
	label: 'Audio',
	description: 'Audio URL',
	array: false,
	color: COLORS.pink[600],
}

export const EMAIL_FIELD: FieldVariantType = {
	icon: 'Mail',
	category: 'Text',
	variant: 'email',
	db_type: 'string',
	label: 'Email',
	description: 'Email address',
	array: false,
	color: COLORS.green[600],
}

export const PHONE_FIELD: FieldVariantType = {
	icon: 'Phone',
	category: 'Text',
	variant: 'phone',
	db_type: 'string',
	label: 'Phone',
	description: 'Phone number',
	array: false,
	color: COLORS.green[600],
}

export const URL_FIELD: FieldVariantType = {
	icon: 'Link',
	category: 'Text',
	variant: 'url',
	db_type: 'string',
	label: 'URL',
	description: 'Website URL',
	array: false,
	color: COLORS.green[600],
}

export const TAG_ARRAY_FIELD: FieldVariantType = {
	icon: 'List',
	category: 'Text',
	variant: 'array',
	label: 'Tags',
	db_type: 'string',
	description: 'Multiple keywords',
	array: true,
	color: COLORS.deepPurple[500],
}

export const BOOLEAN_FIELD: FieldVariantType = {
	icon: 'ToggleLeft',
	category: 'Boolean',
	variant: 'boolean',
	db_type: 'boolean',
	label: 'Switch',
	description: 'True or false switch',
	array: false,
	color: COLORS.lightBlue[500],
}

export const DATE_FIELD: FieldVariantType = {
	icon: 'Calendar',
	category: 'Date',
	variant: 'date',
	db_type: 'datetime',
	label: 'Date',
	description: 'Calendar date',
	array: false,
	color: COLORS.amber[600],
}

export const DATETIME_FIELD: FieldVariantType = {
	icon: 'Clock',
	category: 'Date',
	variant: 'datetime',
	db_type: 'datetime',
	label: 'DateTime',
	description: 'Date and time',
	array: false,
	color: COLORS.amber[600],
}

export const SELECT_FIELD: FieldVariantType = {
	icon: 'ChevronDownSquare',
	category: 'Text',
	variant: 'select',
	label: 'Select',
	db_type: 'string',
	description: 'Select menu of choices',
	array: false,
	color: COLORS.deepPurple[500],
}

export const FLOAT_FIELD: FieldVariantType = {
	icon: 'Hash',
	category: 'Numbers',
	variant: 'float',
	db_type: 'float',
	label: 'Float',
	description: 'Numbers with decimals',
	array: false,
	color: COLORS.purple[500],
}

export const JSON_FIELD: FieldVariantType = {
	icon: 'FileJson',
	category: 'Data',
	variant: 'json',
	db_type: 'jsonb',
	label: 'JSON',
	description: 'JSON field',
	array: false,
	color: COLORS.blue[500],
}

export const IMAGE_FIELD: FieldVariantType = {
	icon: 'Image',
	category: 'Media',
	variant: 'image',
	db_type: 'string',
	label: 'Image',
	description: 'Image URL',
	array: false,
	color: COLORS.pink[500],
}

export const PRICE_FIELD: FieldVariantType = {
	icon: 'DollarSign',
	category: 'Numbers',
	variant: 'price',
	db_type: 'float',
	label: 'Price',
	description: 'Currency in USD',
	array: false,
	color: COLORS.purple[500],
}

export const LOCATION_FIELD: FieldVariantType = {
	icon: 'MapPin',
	category: 'Geographic',
	variant: 'location',
	db_type: 'string',
	label: 'Location',
	description: 'Address with coordinates',
	array: false,
	color: COLORS.teal[500],
}

export const NUMBER_FIELD: FieldVariantType = {
	icon: 'Hash',
	category: 'Numbers',
	variant: 'number',
	db_type: 'integer',
	label: 'Number',
	description: 'Integer values.',
	array: false,
	color: COLORS.purple[500],
}

export const RATING_FIELD: FieldVariantType = {
	icon: 'Star',
	category: 'Numbers',
	variant: 'rating',
	db_type: 'integer',
	label: 'Rating',
	description: 'Five-star ratings',
	array: false,
	color: COLORS.purple[500],
}

export const STRING_FIELD: FieldVariantType = {
	icon: 'Type',
	category: 'Text',
	variant: 'string',
	db_type: 'string',
	label: 'Short text',
	description: 'Single line of text',
	array: false,
	color: COLORS.deepPurple[500],
}

export const SHOPIFY_FIELD: FieldVariantType = {
	icon: 'ShoppingCart',
	category: 'Shopify',
	variant: 'shopify_product',
	db_type: 'string',
	label: 'Shopify product',
	description: 'Shopify product handle',
	array: false,
	color: COLORS.lightGreen[500],
}

export const TEXT_FIELD: FieldVariantType = {
	icon: 'FileText',
	category: 'Text',
	variant: 'text',
	db_type: 'text',
	label: 'Long text',
	description: 'Paragraph of text',
	array: false,
	color: COLORS.deepPurple[500],
}

export const VIDEO_FIELD: FieldVariantType = {
	icon: 'Video',
	category: 'Media',
	variant: 'video',
	label: 'Video',
	db_type: 'string',
	description: 'Video URL',
	array: false,
	color: COLORS.pink[500],
}

export const FILE_FIELD: FieldVariantType = {
	icon: 'File',
	category: 'Media',
	variant: 'file',
	label: 'File',
	db_type: 'text',
	description: 'Upload an attachment',
	array: false,
	color: COLORS.pink[500],
}

export const HABTM_FIELD: FieldVariantType = {
	icon: 'Repeat',
	category: 'Reference',
	db_type: 'habtm',
	variant: 'habtm',
	label: 'Reference',
	description: 'Connect one or more items',
	array: false,
	color: COLORS.orange[500],
}

export const FIELD_VARIANTS: FieldVariantType[] = [
	STRING_FIELD,
	TEXT_FIELD,
	SELECT_FIELD,
	TAG_ARRAY_FIELD,

	EMAIL_FIELD,
	PHONE_FIELD,
	URL_FIELD,

	BOOLEAN_FIELD,
	DATE_FIELD,
	DATETIME_FIELD,
	FLOAT_FIELD,
	NUMBER_FIELD,

	LOCATION_FIELD,
	RATING_FIELD,
	PRICE_FIELD,
	SHOPIFY_FIELD,
	// Media fields
	IMAGE_FIELD,
	VIDEO_FIELD,
	FILE_FIELD,

	HABTM_FIELD,
]
