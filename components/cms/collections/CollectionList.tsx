import React from 'react'
import { DataList } from '../../../components'
import { buildSearchQuery } from '../../../helpers'
import {
	ButtonType,
	DisplayFieldType,
	FormFieldType,
	SearchFilterOptionType,
	SortOptionType,
	ToolbarButtonType,
} from '../../../types'
import {
	CollectionListItem,
	CollectionListItems,
	CollectionHeader,
	CollectionShow,
	CollectionForm,
	CollectionDelete,
	CollectionEmpty,
	CollectionToolbar,
} from '../..'

export type CollectionListProps = {
	grid?: boolean
	selectable?: boolean
	style: string
	href?: string
	displayFields: DisplayFieldType[]
	enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableComments?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean

	enableShow?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableDelete?: boolean
	enableAddToList?: boolean
	fields?: FormFieldType[]
	buttons?: ButtonType[]
	toolbarButtons?: ToolbarButtonType[]
	headers?: {
		label: string
		value: string
	}[]
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
	toolbar?: React.FC<any>
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
	foreignUrl?: string
	query?: any
	resource: any
	filterUser?: boolean
	filterTeam?: boolean
	filterSimilar?: boolean
	filterGeo?: boolean
}

const CollectionList: React.FC<CollectionListProps> = (props) => {
	const {
		grid = false,
		selectable = false,
		url,
		foreignUrl,
		query,
		resource,
		perPage = 10,
		filterUser,
		filterTeam,
		filterSimilar,
		filterGeo,

		enableLikes,
		enableFavorites,
		enableRatings,
		enableComments,
		enableUsers,
		enableGradient,
		enableOverlay,

		style = 'list',
		href,
		buttons = [],
		displayFields = [],
		circular,
		disableImage,

		toolbarButtons = [],

		enableShow,
		enableEdit,
		enableCreate,
		enableDelete,
		enableAddToList,
		fields = [],
		enableSearch,
		enableFilters,
		enableSorting,
		filterOptions = [],
		sortOptions = [],
		headers = [], // Used by KanBan
		header: Header = CollectionHeader,
		list: List = CollectionListItems,
		component: Component = CollectionListItem,
		show: Show = CollectionShow,
		edit: Edit = CollectionForm,
		create: Create = CollectionForm,
		destroy: Destroy = CollectionDelete,
		empty: Empty = CollectionEmpty,
		toolbar: Toolbar = CollectionToolbar,
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

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
		filterUser,
		filterTeam,
		filterSimilar,
		filterGeo,
	})

	const slots = {
		list: {
			...defaultSlots.list,
			headers,
			style,
			href,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableComments,
			enableAddToList,
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
			enableComments,
			enableAddToList,
			enableUsers,
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
			enableAddToList,
			enableDelete,
			toolbarButtons,
		},
		empty: defaultSlots.empty,
		item: {
			...defaultSlots.item,
			href,
			circular,
			disableImage,
			style,
			buttons,
			displayFields,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableComments,
			enableAddToList,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
	}

	return (
		<DataList
			selectable={selectable}
			grid={grid}
			url={url}
			foreignUrl={foreignUrl}
			name="document"
			query={searchQuery}
			fields={fields}
			enableShow={enableShow}
			enableCreate={enableCreate}
			enableEdit={enableEdit}
			enableAddToList={enableAddToList}
			enableDelete={enableDelete}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
			header={Header}
			toolbar={Toolbar}
			list={List}
			component={Component}
			show={Show}
			edit={Edit}
			create={Create}
			destroy={Destroy}
			empty={Empty}
			slots={slots}
		/>
	)
}

export default CollectionList
