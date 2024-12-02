'use client'

import React from 'react'
import { DocumentList } from '../..'
import { DocumentListProps } from '../documents/DocumentList'
import { useApp } from '../../../hooks'

export type CollectionDocumentsProps = Omit<DocumentListProps, 'style' | 'url'> & {
	collectionId: string
}

const CollectionDocuments: React.FC<CollectionDocumentsProps> = (props) => {
	let { collectionId } = props
	const { apiUrl } = useApp()
	const url = `${apiUrl}/cms/collections/${collectionId}/documents`

	return <DocumentList {...props} style='card' url={url}  />
}

export default CollectionDocuments
