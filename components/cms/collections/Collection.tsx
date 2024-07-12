import React from 'react'
import { CollectionContainer, CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionProps = CollectionListProps & CollectionContainerProps

const Collection: React.FC<CollectionProps> = (props) => {
	const {
		resource,
		fields,
		enableSearch,
		enableCreate,
    enableFilters,
    enableSorting,
		url,
		query = {},
		filterUser,
		filterTeam,
		filterRelated,
		filterGeo,
		perPage,
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
			enableSearch={enableSearch}
			enableCreate={enableCreate}
			enableFilters={enableFilters}
      enableSorting={enableSorting}
		>
			<CollectionList {...rest} url={url} />
		</CollectionContainer>
	)
}

export default Collection
