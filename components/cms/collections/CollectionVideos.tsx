import React from 'react'
import { CollectionContainer, CollectionVideoList } from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionVideosProps = CollectionListProps & CollectionContainerProps

const CollectionVideos: React.FC<CollectionVideosProps> = (props) => {
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
			<CollectionVideoList {...rest} url={url} />
		</CollectionContainer>
	)
}

export default CollectionVideos
