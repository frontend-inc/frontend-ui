import React from 'react'
import { CollectionContainer, CollectionImageList } from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionImagesProps = CollectionListProps & CollectionContainerProps

const CollectionImages: React.FC<CollectionImagesProps> = (props) => {
	const {
		resource,
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
			enableSearch={enableSearch}
			enableCreate={enableCreate}
			enableFilters={enableFilters}
      enableSorting={enableSorting}
		>
			<CollectionImageList {...rest} url={url} />
		</CollectionContainer>
	)
}

export default CollectionImages
