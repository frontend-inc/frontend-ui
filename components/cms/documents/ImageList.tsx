'use client'

import React from 'react'
import { DocumentList, ShowImageModal } from '../..'
import { DocumentListProps } from './DocumentList'

export type ImageListProps = DocumentListProps

const ImageList: React.FC<ImageListProps> = (props) => {
	return (
    <DocumentList 
      {...props} 
      style="image" 
      layout="grid"
      show={ShowImageModal} 
    />
  )
}

export default ImageList
