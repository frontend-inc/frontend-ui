'use client'

import React from 'react'
import CollectionList from '../collections/CollectionList'
import { CollectionListProps } from '../collections/CollectionList'

export type SimilarListProps = CollectionListProps & {
  documentId: string
}

const SimilarList: React.FC<SimilarListProps> = (props) => {
  const { url, documentId, ...rest } = props 
  const similarUrl = `${url}/${documentId}/similar`
	return <CollectionList {...rest} url={similarUrl} />
}

export default SimilarList
