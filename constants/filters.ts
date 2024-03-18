import { OptionType } from '../types'

type SortDirectionOption = {
	label: string
	value: 'asc' | 'desc'
}

export const BOOLEAN_FIELDS: String[] = ['boolean']
export const STRING_FIELDS: String[] = ['string', 'text']
export const SELECT_FIELDS: String[] = ['select']
export const NUMBER_FIELDS: String[] = ['number', 'float', 'price', 'rating']
export const DATE_FIELDS: String[] = ['date', 'datetime']
export const JSON_FIELDS: String[] = ['json']
export const ARRAY_FIELDS: String[] = ['array', 'tags']

export const NUMBER_AND_STRING_FIELDS: String[] = [
	...NUMBER_FIELDS,
	...STRING_FIELDS,
]

export const WHERE_OPTIONS: OptionType[] = [
	{ label: 'and', value: 'AND' },
	{ label: 'or', value: 'OR' },
]

export const SORT_DIRECTIONS: SortDirectionOption[] = [
	{ label: 'Increasing', value: 'asc' },
	{ label: 'Decreasing', value: 'desc' },
]

export const BOOLEAN_OPTIONS: OptionType[] = [
	{ label: 'true', value: 'true' },
	{ label: 'false', value: 'false' },
]

export const EQUAL_OPERATOR: OptionType[] = [{ label: '=', value: 'eq' }]

export const TEXT_FILTER_OPERATORS: OptionType[] = [
	{ label: '=', value: 'eq' },
	{ label: '!=', value: 'neq' },
]

export const NUMBER_FILTER_OPERATORS: OptionType[] = [
	{ label: '>', value: 'gt' },
	{ label: '>=', value: 'gte' },
	{ label: '=', value: 'eq' },
	{ label: '<', value: 'lt' },
	{ label: '<=', value: 'lte' },
	{ label: '!=', value: 'neq' },
	{ label: 'in', value: 'in' },
	{ label: 'not in', value: 'nin' },
]

export const DATE_FILTER_OPERATORS: OptionType[] = [
	{ label: '>', value: 'gt' },
	{ label: '<', value: 'lt' },
	{ label: 'after', value: 'gte' },
	{ label: 'before', value: 'lte' },
]

export const BOOLEAN_FILTER_OPERATORS: OptionType[] = [
	{ label: '=', value: 'eq' },
	{ label: '!=', value: 'neq' },
]

export const DATE_RANGE_OPTIONS: OptionType[] = [
	{ label: 'Yesterday', value: '1_day_ago' },
	{ label: '7 days ago', value: '7_days_ago' },
	{ label: '14 days ago', value: '14_days_ago' },
	{ label: '30 days ago', value: '30_days_ago' },
	{ label: '60 days ago', value: '60_days_ago' },
	{ label: '90 days ago', value: '90_days_ago' },
	{ label: 'Current year', value: 'current_year' },
	{ label: 'Tomorrow', value: '1_day' },
	{ label: '7 days', value: '7_days' },
	{ label: '14 days', value: '14_days' },
	{ label: '30 days', value: '30_days' },
	{ label: '60 days', value: '60_days' },
	{ label: '90 days', value: '90_days' },
	{ label: 'Next year', value: 'next_year' },
]

export const FILTER_OPERATORS: Record<string, OptionType[]> = {
	integer: NUMBER_FILTER_OPERATORS,
	float: NUMBER_FILTER_OPERATORS,
	string: TEXT_FILTER_OPERATORS,
	text: TEXT_FILTER_OPERATORS,
	date: DATE_FILTER_OPERATORS,
	datetime: DATE_FILTER_OPERATORS,
	boolean: BOOLEAN_FILTER_OPERATORS,
}

export const FILTERABLE_TYPES: String[] = [
	'boolean',
	'date',
	'datetime',
	'float',
	'number',
	'price',
	'rating',
	'select',
]

export const SORTABLE_TYPES: String[] = [
	'float',
	'rating',
	'number',
	'string',
	'text',
	'price',
	'url',
]

export const SEARCH_FILTER_TYPES: String[] = ['boolean', 'rating', 'select']
