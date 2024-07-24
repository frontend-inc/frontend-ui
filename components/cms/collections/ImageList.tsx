import React from 'react'
import { List, ShowImageModal, ImageListItems } from '../..'
import { ListProps } from './List'

export type ImageListProps = ListProps

const ImageList: React.FC<ImageListProps> = (props) => {

	return (
		<List
			{ ...props }
      list={ 
        ImageListItems 
      }
      show={
        ShowImageModal
      }
		/>			
	)
}

export default ImageList
