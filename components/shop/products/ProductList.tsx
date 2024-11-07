'use client'

import React from 'react'
import { DataList } from '../../../components'
import {
	FormFieldType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'
import {
	ProductListItem,
	ProductListItems,
	ProductHeader,
	ProductShow,
	ProductEmpty,
} from '../..'
import { useApp } from '../../../hooks'

export type ProductListProps = {
	layout?: 'grid' | 'list' | 'slider'
	selectable?: boolean
	url?: string
	enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableShow?: boolean
	fields?: FormFieldType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	perPage?: number
	loadMore?: boolean
	list?: React.FC<any>
	component?: React.FC<any>
	header?: React.FC<any>
	show?: React.FC<any>
	empty?: React.FC<any>
	slots?: {
		header?: any
		list?: any
		show?: any
		empty?: any
		item?: any
	}
	query?: any
}

const ProductList: React.FC<ProductListProps> = (props) => {
	const { apiUrl } = useApp()

	const {
		layout = 'grid',
		selectable = false,
		query,
		perPage = 9,
		enableLikes,
		enableFavorites,
		enableRatings,
		enableUsers,
		enableGradient,
		enableOverlay,
    url,
		enableShow,
		fields = [],
		enableSearch,
		enableFilters,
		enableSorting,
		header: Header = ProductHeader,
		list: List = ProductListItems,
		component: Component = ProductListItem,
		show: Show = ProductShow,
		empty: Empty = ProductEmpty,
		slots: defaultSlots = {
			header: {},
			list: {},
			item: {},
			show: {},
			empty: {},
		},
	} = props || {}

	const searchQuery = {
		sort_by: 'position',
    sort_direction: 'asc',
		per_page: perPage,
    ...query
	}

	const slots = {
		list: {
			...defaultSlots.list,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
		show: {
			...defaultSlots.show,
			selectable,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
		header: defaultSlots.header,
		empty: defaultSlots.empty,
		item: {
			...defaultSlots.item,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
	}

	const filterOptions = [
		{			
			label: 'Rating',
      name: 'average_rating',
			options: [
        { label: '1 Star', value: 1 },
        { label: '2 Stars', value: 2 },
        { label: '3 Stars', value: 3 },
        { label: '4 Stars', value: 4 },
        { label: '5 Stars', value: 5 }
      ]
		},
	]

	const sortOptions = [
		{ name: 'created_at', label: 'Newest' },
		{ name: 'price', label: 'Price' },
		{ name: 'title', label: 'Title' },
	]

	return (
		<DataList
			selectable={selectable}
			layout={layout}
			url={url || `${apiUrl}/shop/products`}
			name="product"
			query={searchQuery}
			fields={fields}
			enableShow={enableShow}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			sortOptions={sortOptions}
			//@ts-ignore
			filterOptions={filterOptions}
			header={Header}
			list={List}
			component={Component}
			show={Show}
			empty={Empty}
			slots={slots}
		/>
	)
}

export default ProductList
