export type SearchFilterOptionType = {
	label: string
	name: string
	options: {
    label: string
    value: string | number | boolean
  }[]		
}

export type SortOptionType = {
	name: string
	label: string
}
