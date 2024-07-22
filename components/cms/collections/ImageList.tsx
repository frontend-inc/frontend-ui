import React from 'react'
import { List, ImageListItems } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'

export type ImageListProps = ListItemsProps & ListContainerProps

const ImageList: React.FC<ImageListProps> = (props) => {

	return (
		<List
			{ ...props }
      list={ ImageListItems }
		/>			
	)
}

export default ImageList
