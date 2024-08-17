import React from 'react'
import { DataList, ShowImageModal, ImageListItems } from '../..'
import { DataListProps } from './DataList'

export type ImageListProps = DataListProps

const ImageList: React.FC<ImageListProps> = (props) => {
	return <DataList {...props} list={ImageListItems} show={ShowImageModal} />
}

export default ImageList
