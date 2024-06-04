import { OptionType } from 'frontend-js'

export type DisplayFieldType = {
	name: string
	variant: string
  icon?: string
	label: string
	options?: OptionType[]
	placeholder?: string
}

export type FormFieldType = {
	name: string
	variant: string
	label: string
	options?: OptionType[]
	placeholder?: string
}

export type TableHeaderType = {
	name: string
	label: string
	variant: string
	sortable: boolean
}
