import { OptionType } from "frontend-js"

export type FormFieldType = {
	name: string
	variant: string
	label: string
  options?: OptionType[]
  placeholder?: string
}

export type DisplayFieldType = FormFieldType

export type TableHeaderType = {
	name: string
	label: string
	variant: string
	sortable: boolean
}
