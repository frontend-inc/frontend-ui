'use client'

import React from 'react'
import { DocumentList } from '../..'
import { DocumentListProps } from './DocumentList'
import DocumentCarouselListItems from './DocumentCarouselListItems'

export type DocumentCarouselListProps = DocumentListProps

const CarouselList: React.FC<DocumentCarouselListProps> = (props) => {
	return <DocumentList {...props} list={DocumentCarouselListItems} />
}

export default CarouselList
