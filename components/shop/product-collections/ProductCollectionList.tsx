'use client'

import React from 'react'
import { DataList } from '../../../components'
import {
	ButtonType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'
import { 
  ProductCollectionShow,
  ProductCollectionListItem, 
  ProductCollectionListItems 
} from '../..'
import { useApp } from '../../../hooks'

export type ProductCollectionListProps = {
	url?: string
	enableGradient?: boolean
	enableOverlay?: boolean
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	loadMore?: boolean
	list: React.FC<any>
	component?: React.FC<any>
	header?: React.FC<any>
	empty?: React.FC<any>
	slots?: {
		header?: any
		list?: any
		empty?: any
		item?: any
	}
	query?: any
	resource: any
}

const ProductCollectionList: React.FC<ProductCollectionListProps> = (props) => {
	const { apiUrl } = useApp()

	const {
		query,
		enableGradient,
		enableOverlay,
		enableSearch,
		enableFilters,
		enableSorting,
		filterOptions = [],
		sortOptions = [],		
		slots: defaultSlots = {
			header: {},
			list: {},
			item: {},
			empty: {},
		},
	} = props || {}

	const slots = {
		list: {
			...defaultSlots.list,
			enableGradient,
			enableOverlay,
		},
		header: defaultSlots.header,
		empty: defaultSlots.empty,
		item: {
			...defaultSlots.item,
			enableGradient,
			enableOverlay,
		},
	}
	return (
		<DataList
			layout="grid"
			url={`${apiUrl}/shop/product_collections`}
			name="product_collection"
			fields={[]}
			query={{
				...query,
				sort_by: 'position',
				sort_direction: 'asc',
			}}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
			list={ProductCollectionListItems}
      show={ProductCollectionShow}
			component={ProductCollectionListItem}
			slots={slots}
		/>
	)
}

export default ProductCollectionList
