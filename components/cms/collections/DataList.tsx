import React from 'react'
import {
	DataListBase,
	DataListItems,
	DataToolbar,
	ShowModal,
	DeleteModal,
	EditModal,
} from '../..'
import { buildSearchQuery } from '../../../helpers'
import {
	ButtonType,
	DisplayFieldType,
	FormFieldType,
	QueryParamsType,
	SearchFilterOptionType,
	SortOptionType,
} from '../../../types'

export type DataListProps = {
	url: string
	name: string
	query?: QueryParamsType
	style: 'avatar' | 'card' | 'list' | 'cover'
	resource?: any
	fields: FormFieldType[]
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	filterOptions: SearchFilterOptionType[]
	sortOptions: SortOptionType[]
	href?: string
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableCreate?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableLikes?: boolean
	enableFavorites?: boolean
	enableRatings?: boolean
	enableComments?: boolean
	enableUsers?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	filterUser?: boolean
	filterTeam?: boolean
	filterSimilar?: boolean
	filterGeo?: boolean
	perPage?: number
	loadMore?: boolean
	list: React.FC<any>
	header?: React.FC<any>
	show?: React.FC<any>
	edit?: React.FC<any>
	destroy?: React.FC<any>
}

const DataList: React.FC<DataListProps> = (props) => {
	const {
		style,
		resource,
		enableSearch,
		enableGeoSearch,
		enableCreate,
		enableEdit,
		enableDelete,
		enableFilters,
		enableSorting,
		href,
		url,
		query = {},
		buttons = [],
		fields = [],
		displayFields = [],
		filterOptions = [],
		sortOptions = [],
		enableLikes,
		enableFavorites,
		enableRatings,
		enableComments,
		enableUsers,
		enableGradient,
		enableOverlay,
		filterUser,
		filterTeam,
		filterSimilar,
		filterGeo,
		perPage,
		header: ResourceHeader = DataToolbar,
		list: ResourceList = DataListItems,
		show: ResourceShow = ShowModal,
		edit: ResourceEdit = EditModal,
		destroy: ResourceDelete = DeleteModal,
		loadMore,
		...rest
	} = props

	const searchQuery = buildSearchQuery({
		query,
		resource,
		perPage,
		filterUser,
		filterTeam,
		filterSimilar,
		filterGeo,
	})

	return (
		<DataListBase
			url={url}
			query={searchQuery}
			name="document"
			header={
				<DataToolbar
					url={url}
					query={searchQuery}
					enableSearch={enableSearch}
					enableGeoSearch={enableGeoSearch}
					enableCreate={enableCreate}
					enableFilters={enableFilters}
					enableSorting={enableSorting}
					filterOptions={filterOptions}
					sortOptions={sortOptions}
				/>
			}
			list={
				<ResourceList
					{...rest}
					style={style}
					buttons={buttons}
					url={url}
					href={href}
					enableLikes={enableLikes}
					enableFavorites={enableFavorites}
					enableRatings={enableRatings}
					enableComments={enableComments}
					enableUsers={enableUsers}
					displayFields={displayFields}
					enableEdit={enableEdit}
					enableDelete={enableDelete}
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
				/>
			}
			show={
				<ResourceShow
					buttons={buttons}
					displayFields={displayFields}
					enableOverlay={enableOverlay}
					enableFavorites={enableFavorites}
					enableLikes={enableLikes}
					enableRatings={enableRatings}
					enableComments={enableComments}
					enableUsers={enableUsers}
				/>
			}
			edit={
        <ResourceEdit 
          fields={fields} 
          parentResource={resource} 
        />
      }
			destroy={<ResourceDelete />}
		/>
	)
}

export default DataList
