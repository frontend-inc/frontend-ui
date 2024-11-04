import { FieldVariantType } from '../../types'

export const AUDIO_FIELD_VARIANT: FieldVariantType = {
	icon: 'Headphones',
	category: 'Media',
	variant: 'audio',
	db_type: 'string',
	label: 'Audio',
	description: 'Audio URL',
	array: false,
	color: 'bg-pink-500',
}

export const EMAIL_FIELD_VARIANT: FieldVariantType = {
	icon: 'Mail',
	category: 'Text',
	variant: 'email',
	db_type: 'string',
	label: 'Email',
	description: 'Email address',
	array: false,
	color: 'bg-green-500',
}

export const PHONE_FIELD_VARIANT: FieldVariantType = {
	icon: 'Phone',
	category: 'Text',
	variant: 'phone',
	db_type: 'string',
	label: 'Phone',
	description: 'Phone number',
	array: false,
	color: 'bg-green-500',
}

export const URL_FIELD_VARIANT: FieldVariantType = {
	icon: 'Link',
	category: 'Text',
	variant: 'url',
	db_type: 'string',
	label: 'URL',
	description: 'Website URL',
	array: false,
	color: 'bg-green-500',
}

export const TAG_ARRAY_FIELD_VARIANT: FieldVariantType = {
	icon: 'List',
	category: 'Text',
	variant: 'array',
	label: 'Tags',
	db_type: 'string',
	description: 'Multiple keywords',
	array: true,
	color: 'bg-purple-500',
}

export const BOOLEAN_FIELD_VARIANT: FieldVariantType = {
	icon: 'ToggleLeft',
	category: 'Boolean',
	variant: 'boolean',
	db_type: 'boolean',
	label: 'Switch',
	description: 'True or false switch',
	array: false,
	color: 'bg-sky-500',
}

export const DATE_FIELD_VARIANT: FieldVariantType = {
	icon: 'Calendar',
	category: 'Date',
	variant: 'date',
	db_type: 'datetime',
	label: 'Date',
	description: 'Calendar date',
	array: false,
	color: 'bg-amber-500',
}

export const DATETIME_FIELD_VARIANT: FieldVariantType = {
	icon: 'Clock',
	category: 'Date',
	variant: 'datetime',
	db_type: 'datetime',
	label: 'DateTime',
	description: 'Date and time',
	array: false,
	color: 'bg-amber-500',
}

export const SELECT_FIELD_VARIANT: FieldVariantType = {
	icon: 'ChevronDownSquare',
	category: 'Text',
	variant: 'select',
	label: 'Select',
	db_type: 'string',
	description: 'Select menu of choices',
	array: false,
	color: 'bg-purple-500',
}

export const FLOAT_FIELD_VARIANT: FieldVariantType = {
	icon: 'Hash',
	category: 'Numbers',
	variant: 'float',
	db_type: 'float',
	label: 'Float',
	description: 'Numbers with decimals',
	array: false,
	color: 'bg-purple-500',
}

export const JSON_FIELD_VARIANT: FieldVariantType = {
	icon: 'FileJson',
	category: 'Data',
	variant: 'json',
	db_type: 'jsonb',
	label: 'JSON',
	description: 'JSON field',
	array: false,
	color: 'bg-blue-500',
}

export const IMAGE_FIELD_VARIANT: FieldVariantType = {
	icon: 'Image',
	category: 'Media',
	variant: 'image',
	db_type: 'string',
	label: 'Image',
	description: 'Image URL',
	array: false,
	color: 'bg-pink-500',
}

export const PRICE_FIELD_VARIANT: FieldVariantType = {
	icon: 'DollarSign',
	category: 'Numbers',
	variant: 'price',
	db_type: 'float',
	label: 'Price',
	description: 'Currency in USD',
	array: false,
	color: 'bg-purple-500',
}

export const LOCATION_FIELD_VARIANT: FieldVariantType = {
	icon: 'MapPin',
	category: 'Geographic',
	variant: 'location',
	db_type: 'string',
	label: 'Location',
	description: 'Address with coordinates',
	array: false,
	color: 'bg-teal-500',
}

export const NUMBER_FIELD_VARIANT: FieldVariantType = {
	icon: 'Hash',
	category: 'Numbers',
	variant: 'number',
	db_type: 'integer',
	label: 'Number',
	description: 'Integer values.',
	array: false,
	color: 'bg-purple-500',
}

export const RATING_FIELD_VARIANT: FieldVariantType = {
	icon: 'Star',
	category: 'Numbers',
	variant: 'rating',
	db_type: 'integer',
	label: 'Rating',
	description: 'Five-star ratings',
	array: false,
	color: 'bg-purple-500',
}

export const STRING_FIELD_VARIANT: FieldVariantType = {
	icon: 'Type',
	category: 'Text',
	variant: 'string',
	db_type: 'string',
	label: 'Short text',
	description: 'Single line of text',
	array: false,
	color: 'bg-purple-500',
}

export const TEXT_FIELD_VARIANT: FieldVariantType = {
	icon: 'FileText',
	category: 'Text',
	variant: 'text',
	db_type: 'text',
	label: 'Long text',
	description: 'Paragraph of text',
	array: false,
	color: 'bg-purple-500',
}

export const VIDEO_FIELD_VARIANT: FieldVariantType = {
	icon: 'Video',
	category: 'Media',
	variant: 'video',
	label: 'Video',
	db_type: 'string',
	description: 'Video URL',
	array: false,
	color: 'bg-pink-500',
}

export const FILE_FIELD_VARIANT: FieldVariantType = {
	icon: 'File',
	category: 'Media',
	variant: 'file',
	label: 'File',
	db_type: 'text',
	description: 'Upload an attachment',
	array: false,
	color: 'bg-pink-500',
}

export const SHOPIFY_PRODUCT_FIELD_VARIANT: FieldVariantType = {
	icon: 'Shirt',
	category: 'Shopify',
	variant: 'shopify_product',
	label: 'Shopify Product',
	db_type: 'string',
	description: 'Shopify Product',
	array: true,
	color: 'bg-lime-500',
}

export const YOUTUBE_VIDEO_FIELD_VARIANT: FieldVariantType = {
	icon: 'Youtube',
	category: 'Addon',
	variant: 'youtube_video',
	label: 'YouTube Video',
	db_type: 'string',
	description: 'YouTube Video',
	array: true,
	color: 'bg-pink-500',
}

export const VIMEO_VIDEO_FIELD_VARIANT: FieldVariantType = {
	icon: 'PlayCircle',
	category: 'Addon',
	variant: 'vimeo_video',
	label: 'Vimeo Video',
	db_type: 'string',
	description: 'Vimeo Video',
	array: true,
	color: 'bg-pink-500',
}

export const SOUNDCLOUND_AUDIO_FIELD_VARIANT: FieldVariantType = {
	icon: 'AudioLines',
	category: 'Addon',
	variant: 'soundcloud_audio',
	label: 'Soundcloud Audio',
	db_type: 'string',
	description: 'Soundcloud Audio',
	array: true,
	color: 'bg-pink-500',
}

export const FIELD_VARIANTS: FieldVariantType[] = [
	STRING_FIELD_VARIANT,
	TEXT_FIELD_VARIANT,
	SELECT_FIELD_VARIANT,
	TAG_ARRAY_FIELD_VARIANT,
	URL_FIELD_VARIANT,
	BOOLEAN_FIELD_VARIANT,
	DATE_FIELD_VARIANT,
	DATETIME_FIELD_VARIANT,
	FLOAT_FIELD_VARIANT,
	NUMBER_FIELD_VARIANT,
	RATING_FIELD_VARIANT,
	PRICE_FIELD_VARIANT,
]
