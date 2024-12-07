'use client'

import React from 'react'
import { DocumentList, DocumentCarouselListItems } from '../..'
import { DocumentListProps } from '../documents/DocumentList'
import { useApp } from '../../../hooks'

export type CollectionDocumentsCarouselProps = DocumentListProps & {
	collectionId: string
	enableAutoplay?: boolean
}

const CollectionDocumentsCarousel: React.FC<
	CollectionDocumentsCarouselProps
> = (props) => {
	const { apiUrl } = useApp()
	const { collectionId, enableAutoplay, ...rest } = props

	const slots = {
		list: {
			enableAutoplay,
		},
	}

	const url = `${apiUrl}/cms/collections/${collectionId}/documents`

	return (
		<DocumentList
			{...rest}
			url={url}
			list={DocumentCarouselListItems}
			slots={slots}
		/>
	)
}

export default CollectionDocumentsCarousel
