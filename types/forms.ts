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

export type TableHeaderType = {
	name: string
	label: string
	variant: string
	sortable: boolean
}
