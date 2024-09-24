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


export type QuestionTypeType = 
  'string' | 
  'text' |
  'number' |
  'boolean' |
  'select' | 
  'date' | 
  'radio' | 
  'checkbox' |
  'email' |
  'phone' | 
  'url'   

export type FormQuestionType = {
  question_id?: number
  form_id?: number
  position?: number
  question?: QuestionType
  form?: FormType
}

export type QuestionType = {
  id?: number
  label?: string
  handle?: string
  title?: string
  description?: string
  question_type?: QuestionTypeType
  image?: {
    url: string
  }	
}

export type AnswerType = {
  title?: string
  question_id?: number
  points?: number
  image?: {
    url: string
  }
  position?: number
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
