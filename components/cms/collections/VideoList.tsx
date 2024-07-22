import React from 'react'
import { List, VideoListItems } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'

export type VideoListProps = ListItemsProps & ListContainerProps

const VideoList: React.FC<VideoListProps> = (props) => {
	
	return (
    <List 
      { ...props }
      list={ VideoListItems }
    />
	)
}

export default VideoList
