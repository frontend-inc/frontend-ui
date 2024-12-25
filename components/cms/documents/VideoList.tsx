'use client'

import React from 'react'
import { DocumentList, ShowVideoModal } from '../..'
import { DocumentListProps } from './DocumentList'

export type VideoListProps = DocumentListProps

const VideoList: React.FC<VideoListProps> = (props) => {
	return (
    <DocumentList 
      {...props} 
      style="video" 
      layout="grid" 
      show={ShowVideoModal} 
    />
  )
}

export default VideoList
