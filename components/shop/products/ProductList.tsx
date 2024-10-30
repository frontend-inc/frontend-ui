'use client'

import React from 'react'
import { DataList } from '../../../components'
import { buildSearchQuery } from '../../../helpers'
import {
	ButtonType,
	DisplayFieldType,
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
	displayFields: DisplayFieldType[]
	enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableShow?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	filterOptions?: SearchFilterOptionType[]
	sortOptions?: SortOptionType[]
	perPage?: number
	loadMore?: boolean
	list: React.FC<any>
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
	resource: any
}

const ProductList: React.FC<ProductListProps> = (props) => {
	const { apiUrl } = useApp()

	const {
		layout = 'grid',
		selectable = false,
		query,
		resource,
		perPage = 9,
		enableLikes,
		enableFavorites,
		enableRatings,
		enableUsers,
		enableGradient,
		enableOverlay,
    url = `${apiUrl}/shop/products`,
		buttons = [],
		displayFields = [],
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

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
	})

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
			displayFields,
			buttons,
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
			buttons,
			displayFields,
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
			field: 'average_rating',
			label: 'Rating',
			variant: 'ratings_scale',
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
			url={url}
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
