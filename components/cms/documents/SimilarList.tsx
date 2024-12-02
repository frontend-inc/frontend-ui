'use client'

import React from 'react'
import DocumentList from '../documents/DocumentList'
import { DocumentListProps } from '../documents/DocumentList'

export type SimilarListProps = DocumentListProps & {
	documentId: string
}

const SimilarList: React.FC<SimilarListProps> = (props) => {
	const { url, documentId, ...rest } = props
	const similarUrl = `${url}/${documentId}/similar`
	return <DocumentList {...rest} url={similarUrl} />
}

export default SimilarList
