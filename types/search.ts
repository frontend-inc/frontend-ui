export type SearchFilterVariantType =
	| 'single_choice'
	| 'multiple_choice'
	| 'boolean'
	| 'number_range'
	| 'price_range'
	| 'ratings'

export type SearchFilterOptionType = {
	label: string
	field: string
	variant: SearchFilterVariantType
	options:
		| string[]
		| {
				min: number
				max: number
		  }[]
}

export type SortOptionType = {
	field: string
	label: string
}
