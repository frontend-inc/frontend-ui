'use client'

import React from 'react'
import { DataList } from '../../../components'
import {
	buildListFields,
	buildSortFields,
	buildFilterFields,
} from '../../../helpers'
import { ButtonType, MetafieldType, FormFieldType } from '../../../types'
import {
	CollectionListItem,
	CollectionListItems,
	CollectionHeader,
	CollectionShow,
	CollectionEmpty,
} from '../..'

export type CollectionListProps = {
	layout?: 'list' | 'grid' | 'slider'
	style: string

	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean

	filterChoices?: string[]

	enableLikes?: boolean
	enableFavorites?: boolean
	enableComments?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean

	displaySubtitle?: boolean
	displayCategory?: boolean
	displayLocation?: boolean
	displayDescription?: boolean
	displayTags?: boolean

	sortTitle?: boolean
	sortPosition?: boolean
	sortDate?: boolean
	sortPublished?: boolean
	sortPrice?: boolean

	enableShow?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
	displayFields?: MetafieldType[]
	headers?: {
		label: string
		value: string
	}[]
	perPage?: number
	loadMore?: boolean
	list: React.FC<any>
	component?: React.FC<any>
	header?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
	empty?: React.FC<any>
	slots?: {
		header?: any
		toolbar?: any
		list?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
		item?: any
	}
	circular?: boolean
	disableImage?: boolean
	url: string
	query?: any
	resource: any
	filterSimilar?: boolean
	filterGeo?: boolean
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		url,
		query,
		perPage = 12,
		displaySubtitle,
		displayCategory,
		displayLocation,
		displayDescription,
		displayTags,

		enableLikes,
		enableFavorites,
		enableComments,

		sortTitle,
		sortPosition,
		sortDate,
		sortPublished,
		sortPrice,

		enableGradient,
		enableOverlay,

		style = 'card',
		buttons = [],
		circular,
		disableImage,
		enableShow,

		fields = [],
		enableSearch,
		enableFilters,
		enableSorting,
		displayFields = [],
		filterChoices = [],
		headers = [], // Used by KanBan
		header: Header = CollectionHeader,
		list: List = CollectionListItems,
		component: Component = CollectionListItem,
		show: Show = CollectionShow,
		empty: Empty = CollectionEmpty,
		slots: defaultSlots = {
			header: {},
			toolbar: {},
			list: {},
			item: {},
			show: {},
			edit: {},
			create: {},
			destroy: {},
			empty: {},
		},
	} = props || {}

	const searchQuery = {
		sort_by: 'position',
		sort_direction: 'asc',
		per_page: perPage,
		...query,
	}

	const listFields = buildListFields({
		displaySubtitle,
		displayCategory,
		displayLocation,
		displayDescription,
		displayTags,
	})

	const sortOptions = buildSortFields({
		sortTitle,
		sortPosition,
		sortDate,
		sortPublished,
		sortPrice,
	})

	const filterOptions = buildFilterFields({
		filterChoices,
	})

	const slots = {
		list: {
			...defaultSlots.list,
			headers,
			style,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
		show: {
			...defaultSlots.show,
			displayFields,
			buttons,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
		edit: {
			...defaultSlots.edit,
			fields,
		},
		create: {
			...defaultSlots.create,
			fields,
		},
		destroy: defaultSlots.destroy,
		header: defaultSlots.header,
		toolbar: {
			...defaultSlots.toolbar,
		},
		empty: {
			...defaultSlots.empty,
			icon: 'ri-search-line',
			title: 'No items found',
			description: 'Try to adjust your filters or search query',
		},
		item: {
			...defaultSlots.item,
			circular,
			disableImage,
			style,
			buttons,
			listFields,
			enableLikes,
			enableFavorites,
			enableComments,
			enableGradient,
			enableOverlay,
		},
	}

	const layout =
		{
			avatar: 'list',
			list: 'list',
			text: 'list',
			card: 'grid',
			cover: 'grid',
		}[style] || 'list'

	return (
		<DataList
			//@ts-ignore
			layout={layout}
			url={url}
			name="document"
			fields={fields}
			query={searchQuery}
			enableShow={enableShow}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			//@ts-ignore
			filterOptions={filterOptions}
			sortOptions={sortOptions}
			header={Header}
			list={List}
			component={Component}
			show={Show}
			empty={Empty}
			slots={slots}
		/>
	)
}

export default CollectionList
