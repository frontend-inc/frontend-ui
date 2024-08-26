import React from 'react'
import { CollectionGrid, ShowImageModal, ImageGridItems } from '../..'
import { CollectionListProps } from './CollectionList'

export type ImageGridProps = CollectionListProps

const ImageList: React.FC<ImageGridProps> = (props) => {
	return (
		<CollectionGrid {...props} list={ImageGridItems} show={ShowImageModal} />
	)
}

export default ImageList
