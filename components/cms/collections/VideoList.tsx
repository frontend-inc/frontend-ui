import React from 'react'
import { List, VideoListItems, ShowVideoModal } from '../..'
import { ListProps } from './List'

export type VideoListProps = ListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return <List {...props} list={VideoListItems} show={ShowVideoModal} />
}

export default VideoList
