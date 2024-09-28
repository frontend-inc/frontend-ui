import { OptionType } from 'frontend-js'

export type DisplayFieldType = {
	name: string
	variant: string
	icon?: string
	label: string
	options?: OptionType[]
	placeholder?: string
}

export type FormFieldConditionType = {
	name: string
	operator: 'eq' | 'neq' | 'in' | 'nin'
	value: any
}

export type FormFieldType = {
	icon?: string
	name: string
	variant: string
	label?: string
	options?: OptionType[]
	placeholder?: string
	conditions?: FormFieldConditionType[]
	// Used by ReferenceInput
	resource?: any
	url?: string
	foreignUrl?: string
	fields?: FormFieldType[]
	contentType?: string
	displayField?: string
	valueParam?: string
	query?: any
	default?: any
}

export type ToolbarButtonType = FormFieldType & {
	icon?: string
	color?: 'primary' | 'secondary'
	variant?: 'contained' | 'outlined' | 'text'
	buttonText: string
	onClick?: (selected: any[]) => void
}

export type TableHeaderType = {
	name: string
	label: string
	variant: string
	sortable: boolean
}

export type FormQuestionType = {
	question_id?: number
	form_id?: number
	position?: number
	question?: QuestionType
	form?: FormType
}

export type QuestionVariantType =
	| 'single_choice'
	| 'multiple_choice'
	| 'string'
	| 'text'
	| 'number'
	| 'boolean'
	| 'select'
	| 'date'
	| 'radio'
	| 'checkbox'
	| 'email'
	| 'phone'
	| 'url'
	| 'image'
	| 'file'

export type QuestionType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description?: string
	variant?: QuestionVariantType
	image?: {
		url: string
	}
}

export type AnswerType = {
	id?: number
	title?: string
	description?: string
	position?: number
	question_id?: number
	value?: string | number
	points?: number
	image?: {
		url: string
	}
	video?: {
		url: string
	}
}

export type FormType = {
	id?: number
	label?: string
	handle?: string
	title?: string
	description?: string
	image?: {
		url: string
	}
	published?: boolean
	form_questions?: FormQuestionType[]
	quetions?: QuestionType[]
}
