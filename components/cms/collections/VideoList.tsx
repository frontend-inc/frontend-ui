import React from 'react'
import { CollectionGrid, VideoListItems, ShowVideoModal } from '../..'
import { CollectionListProps } from './CollectionList'

export type VideoListProps = CollectionListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return (
		<CollectionGrid {...props} list={VideoListItems} show={ShowVideoModal} />
	)
}

export default VideoList
