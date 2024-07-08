import { OptionType } from '../types'

export type ConfigParams = {
	collection?: string
	path?: string
}

export type FetchOptionType = {
	method: string
	headers: Record<string, any>
	body: any
}

export type OperatorType =
	| 'asc'
	| 'desc'
	| 'true'
	| 'false'
	| 'eq'
	| 'neq'
	| 'like'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte'
	| 'in'
	| 'nin'
	| 'include'
	| '1_day_ago'
	| '7_days_ago'
	| '14_days_ago'
	| '30_days_ago'
	| '60_days_ago'
	| '90_days_ago'

export type Value = string | number | string[] | number[]

export type FilterType = {
	[field: string]: {
		[operator in OperatorType]?: Value
	}
}

export type FiltersType = {
	AND?: FilterType[]
	OR?: FilterType[]
}

/* This is the JSON formatted query
   Example: 
  {     
    keywords: 'harry potter', 
    filters: {
      AND: [
        { category: { in: ['books', 'movies'] },      
        { price: { gt: 20 } }
      ],
      OR: [
        { rating: { gte: 4 } }        
      ]
    },
    sort_by: 'rating', 
    sort_direction: 'desc' 
  }
*/

export type QueryParamsType = {
	sort_by?: string
	sort_direction?: 'asc' | 'desc' | null
	keywords?: string | null
	filters?: FiltersType | Record<string, any>
	page?: number | null
	per_page?: number | null
  current_user?: boolean 
  current_team?: boolean
	rest?: any
}

export type FilterOperatorType =
	| 'asc'
	| 'desc'
	| 'true'
	| 'false'
	| 'eq'
	| 'neq'
	| 'like'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte'
	| 'in'
	| 'nin'
	| 'btw'
	| '1_day_ago'
	| '7_days_ago'
	| '14_days_ago'
	| '30_days_ago'
	| '60_days_ago'
	| '90_days_ago'
	| 'current_year'
	| '1_day'
	| '7_days'
	| '14_days'
	| '30_days'
	| '60_days'
	| '90_days'
	| 'next_year'

export type FilterWhereType = 'AND' | 'OR'

export type FilterOptionType = {
	where: FilterWhereType
	field: string
	operator: FilterOperatorType
	value: any
}

export type SearchFilterInputProps = {
	filter?: FilterOptionType
	field?: string
	label?: string
	where?: FilterWhereType
	operator?: FilterOperatorType
	options?: OptionType[]
	handleSubmit: (value: any) => void
}
