import * as COLORS from '@mui/material/colors'

type QuestionVariantTypeType =
	| 'single_choice'
	| 'multiple_choice'
	| 'audio'
	| 'email'
	| 'phone'
	| 'url'
	| 'array'
	| 'boolean'
	| 'date'
	| 'select'
	| 'number'
	| 'string'
	| 'text'
	| 'image'
	| 'price'
	| 'location'
	| 'rating'
	| 'video'
	| 'file'
	| 'location'

type QuestionVariantType = {
	icon: string
	label: string
	description: string
	color: string
	variant: QuestionVariantTypeType
}

export const SINGLE_CHOICE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'ListTodo',
	label: 'Single Choice',
	variant: 'single_choice',
	description: 'Select a single option',
	color: COLORS.deepPurple[500],
}

export const MULTIPLE_CHOICE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'ListChecks',
	label: 'Select Multiple',
	variant: 'multiple_choice',
	description: 'Select multiple options',
	color: COLORS.purple[500],
}

export const AUDIO_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Headphones',
	label: 'Audio',
	variant: 'audio',
	description: 'Audio URL',
	color: COLORS.pink[600],
}

export const EMAIL_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Mail',
	label: 'Email',
	description: 'Email address',
	variant: 'email',
	color: COLORS.green[600],
}

export const PHONE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Phone',
	label: 'Phone',
	description: 'Phone number',
	variant: 'phone',
	color: COLORS.green[600],
}

export const URL_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Link',
	label: 'URL',
	description: 'Website URL',
	variant: 'url',
	color: COLORS.green[600],
}

export const TAG_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'List',
	label: 'Tags',
	description: 'Multiple keywords',
	variant: 'array',
	color: COLORS.deepPurple[500],
}

export const BOOLEAN_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'ToggleLeft',
	label: 'Switch',
	description: 'True or false switch',
	variant: 'boolean',
	color: COLORS.lightBlue[500],
}

export const DATE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Calendar',
	label: 'Date',
	description: 'Calendar date',
	variant: 'date',
	color: COLORS.amber[600],
}

export const SELECT_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'ChevronDownSquare',
	label: 'Select',
	description: 'Select menu of choices',
	variant: 'select',
	color: COLORS.deepPurple[500],
}

export const IMAGE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Image',
	label: 'Image',
	description: 'Image URL',
	variant: 'image',
	color: COLORS.pink[500],
}

export const PRICE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'DollarSign',
	label: 'Price',
	description: 'Currency in USD',
	variant: 'price',
	color: COLORS.purple[500],
}

export const LOCATION_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'MapPin',
	label: 'Location',
	description: 'Address with coordinates',
	variant: 'location',
	color: COLORS.teal[500],
}

export const NUMBER_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Hash',
	label: 'Number',
	description: 'Integer values.',
	variant: 'number',
	color: COLORS.purple[500],
}

export const RATING_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Star',
	label: 'Rating',
	description: 'Five-star ratings',
	variant: 'rating',
	color: COLORS.purple[500],
}

export const STRING_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Type',
	label: 'Short text',
	description: 'Single line of text',
	variant: 'string',
	color: COLORS.deepPurple[500],
}

export const TEXT_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'FileText',
	label: 'Long text',
	description: 'Paragraph of text',
	variant: 'text',
	color: COLORS.deepPurple[500],
}

export const VIDEO_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'Video',
	label: 'Video',
	description: 'Video URL',
	variant: 'video',
	color: COLORS.pink[500],
}

export const FILE_QUESTION_VARIANT: QuestionVariantType = {
	icon: 'File',
	label: 'File',
	description: 'Upload an attachment',
	variant: 'file',
	color: COLORS.pink[500],
}

export const QUESTION_VARIANTS: QuestionVariantType[] = [
	SINGLE_CHOICE_QUESTION_VARIANT,
	MULTIPLE_CHOICE_QUESTION_VARIANT,
	STRING_QUESTION_VARIANT,
	TEXT_QUESTION_VARIANT,
	SELECT_QUESTION_VARIANT,
	TAG_QUESTION_VARIANT,

	EMAIL_QUESTION_VARIANT,
	PHONE_QUESTION_VARIANT,
	URL_QUESTION_VARIANT,

	BOOLEAN_QUESTION_VARIANT,
	DATE_QUESTION_VARIANT,
	NUMBER_QUESTION_VARIANT,

	LOCATION_QUESTION_VARIANT,
	RATING_QUESTION_VARIANT,
	PRICE_QUESTION_VARIANT,

	IMAGE_QUESTION_VARIANT,
	VIDEO_QUESTION_VARIANT,
	FILE_QUESTION_VARIANT,
]
