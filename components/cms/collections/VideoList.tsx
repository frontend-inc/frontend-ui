import React from 'react'
import { ListContainer, VideoListItems } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'

export type VideoListProps = ListItemsProps & ListContainerProps

const VideoList: React.FC<VideoListProps> = (props) => {
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
		<ListContainer
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
			<VideoListItems {...rest} url={url} />
		</ListContainer>
	)
}

export default VideoList
