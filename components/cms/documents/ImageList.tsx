'use client'

import React from 'react'
import { DocumentList, ShowImageModal, ImageListItems } from '../..'
import { DocumentListProps } from './DocumentList'

export type ImageListProps = DocumentListProps

const ImageList: React.FC<ImageListProps> = (props) => {
	return (
		<DocumentList {...props} list={ImageListItems} show={ShowImageModal} />
	)
}

export default ImageList
