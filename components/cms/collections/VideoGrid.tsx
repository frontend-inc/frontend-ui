import React from 'react'
import { CollectionGrid, VideoGridItems, ShowVideoModal } from '../..'
import { CollectionListProps } from './CollectionList'

export type VideoGridProps = CollectionListProps

const VideoGrid: React.FC<VideoGridProps> = (props) => {
	return (
		<CollectionGrid {...props} list={VideoGridItems} show={ShowVideoModal} />
	)
}

export default VideoGrid
