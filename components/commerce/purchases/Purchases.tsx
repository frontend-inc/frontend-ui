import React from 'react'
import { DataListItems } from '../..'
import {
	SortOptionType,
	SearchFilterOptionType,
	DisplayFieldType,
	ButtonType,
} from '../../../types'

export type PurchasesProps = {
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	field: any
	buttons?: ButtonType[]
	displayFields?: DisplayFieldType[]
	url: string
	handle: string
	href: any
	foreignUrl?: string
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	perPage?: number
	query?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enablePurchases?: boolean
	enableInfiniteLoad?: boolean
	enableLoadMore?: boolean
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const Purchases: React.FC<PurchasesProps> = (props) => {
	const { buttons = [], displayFields = [], url, ...rest } = props

	return (
		<DataListItems
			buttons={buttons}
			displayFields={displayFields}
			url={`${url}/purchases`}
			// Todo: Component errors without a default value
			query={{}}
			{...rest}
		/>
	)
}

export default Purchases
