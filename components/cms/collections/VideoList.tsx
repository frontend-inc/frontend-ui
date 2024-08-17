import React from 'react'
import { DataList, VideoListItems, ShowVideoModal } from '../..'
import { DataListProps } from './DataList'

export type VideoListProps = DataListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return <DataList {...props} list={VideoListItems} show={ShowVideoModal} />
}

export default VideoList
