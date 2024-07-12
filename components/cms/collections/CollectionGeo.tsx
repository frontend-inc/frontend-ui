import React from 'react'
import { CollectionContainer } from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import CollectionGeoList from './CollectionGeoList'

export type CollectionGeoProps = CollectionListProps & CollectionContainerProps

const CollectionGeo: React.FC<CollectionGeoProps> = (props) => {
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
		<CollectionContainer
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
			<CollectionGeoList url={url} displayFields={displayFields} {...rest} />
		</CollectionContainer>
	)
}

export default CollectionGeo
