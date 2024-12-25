export type SearchFilterOptionType = {
	label: string
	name: string
	options: {
		label: string
		value: string | number | boolean | null
	}[]
}

export type SortOptionType = {
	name: string
	label: string
}
