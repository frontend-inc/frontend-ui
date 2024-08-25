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
  CollectionListItem,
	CollectionListItems,
	CollectionToolbar,
	CollectionShow,
	CollectionForm,
	CollectionDelete,
	CollectionEmpty,
  CollectionReferences
} from '../..'

export type CollectionListProps = {
	style: string
	buttons: ButtonType[]
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
  enableAddReference?: boolean
	fields?: FormFieldType[]
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
	toolbar?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	create?: React.FC<any>
	destroy?: React.FC<any>
	empty?: React.FC<any>
  references?: React.FC<any>
	slots?: {
		toolbar?: any
		list?: any
		show?: any
		edit?: any
		create?: any
		destroy?: any
		empty?: any
    references?: any
    item?: any
	}
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
		url,
    foreignUrl,
		query,
		resource,
		perPage,
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

		style,
		buttons = [],
		displayFields = [],

		enableShow,
		enableEdit,
		enableCreate,
		enableDelete,
    enableAddReference,
		fields = [],

		enableSearch,
		enableFilters,
		enableSorting,
		filterOptions = [],
		sortOptions = [],
		headers = [], // Used by KanBan
		toolbar: Toolbar = CollectionToolbar,
		list: List = CollectionListItems,    
    component: Component = CollectionListItem,
		show: Show = CollectionShow,
		edit: Edit = CollectionForm,
		create: Create = CollectionForm,
		destroy: Destroy = CollectionDelete,
		empty: Empty = CollectionEmpty,
    references: References = CollectionReferences,
		slots: defaultSlots = {
			toolbar: {},
			list: {},
      item: {},
			show: {},
			edit: {},
			create: {},
			destroy: {},
      references: {},
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
      enableLikes,
			enableFavorites,
			enableRatings,
			enableComments,
      enableAddReference,
			enableUsers,
			enableGradient,
			enableOverlay,
		},
		show: {
      ...defaultSlots.show,
			displayFields,
			buttons,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableComments,
      enableAddReference,
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
		toolbar: defaultSlots.toolbar,
		empty: defaultSlots.empty,
    item: {
      ...defaultSlots.item,
      style,
			buttons,
			displayFields,
			enableLikes,
			enableFavorites,
			enableRatings,
			enableComments,
      enableAddReference,
			enableUsers,
			enableGradient,
			enableOverlay,      
    },
    references: defaultSlots.references
	}

	return (
		<DataList
			url={url}
      foreignUrl={foreignUrl}
			name="document"
			query={searchQuery}
			fields={fields}
			enableShow={enableShow}
			enableCreate={enableCreate}
			enableEdit={enableEdit}
      enableAddReference={enableAddReference}
			enableDelete={enableDelete}
			enableSearch={enableSearch}
			enableFilters={enableFilters}
			enableSorting={enableSorting}
			filterOptions={filterOptions}
			sortOptions={sortOptions}
			toolbar={Toolbar}
			list={List}
      component={Component}
			show={Show}
			edit={Edit}
			create={Create}
			destroy={Destroy}
			empty={Empty}
      references={ References }
			slots={slots}
		/>
	)
}

export default CollectionList
