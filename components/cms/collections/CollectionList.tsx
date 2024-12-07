'use client'

import React from 'react'
import { DataList } from '../..'
import { SearchFilterOptionType, SortOptionType } from '../../../types'
import { CollectionShow, CollectionListItem, CollectionListItems } from '../..'
import { useApp } from '../../../hooks'

export type CollectionListProps = {
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

const CollectionList: React.FC<CollectionListProps> = (props) => {
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
			url={`${apiUrl}/cms/collections`}
			name="collection"
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
			list={CollectionListItems}
			show={CollectionShow}
			component={CollectionListItem}
			slots={slots}
		/>
	)
}

export default CollectionList
