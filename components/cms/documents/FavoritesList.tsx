'use client'

import React from 'react'
import { DocumentList } from '../..'
import { DocumentListProps } from './DocumentList'

const FavoritesList: React.FC<DocumentListProps> = (props) => {
	let { url, ...rest } = props
	const favoritesUrl = `/api/v1/cms/documents/favorites`
	return <DocumentList {...rest} url={favoritesUrl} />
}

export default FavoritesList
