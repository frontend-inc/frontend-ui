'use client'

import React from 'react'
import { DocumentList, VideoListItems, ShowVideoModal } from '../..'
import { DocumentListProps } from './DocumentList'

export type VideoListProps = DocumentListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return (
		<DocumentList {...props} list={VideoListItems} show={ShowVideoModal} />
	)
}

export default VideoList
