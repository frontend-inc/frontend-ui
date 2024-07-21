import React from 'react'
import { ListContainer } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import GeoListItems from './GeoListItems'

export type GeoListProps = ListItemsProps & ListContainerProps

const GeoList: React.FC<GeoListProps> = (props) => {
	const {
		resource,
		fields,
		enableSearch,
		enableCreate,
		url,
		query = {},
		filterUser,
		filterTeam,
		filterRelated,
		filterGeo,
    enableFilters,
    enableSorting,
		perPage,
		displayFields,
		...rest
	} = props

	return (
		<ListContainer
			resource={resource}
			url={url}
			query={query}
			filterUser={filterUser}
			filterTeam={filterTeam}
			filterRelated={filterRelated}
			filterGeo={filterGeo}
			perPage={perPage}
			fields={fields}
			enableGeoSearch
			enableSearch={enableSearch}
      enableFilters={enableFilters}
      enableSorting={enableSorting}
			enableCreate={enableCreate}
		>
			<GeoListItems url={url} displayFields={displayFields} {...rest} />
		</ListContainer>
	)
}

export default GeoList
