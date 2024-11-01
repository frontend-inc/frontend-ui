'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

const FavoritesList: React.FC<CollectionListProps> = (props) => {
	let { url, ...rest } = props
	const favoritesUrl = `${url}/favorites`
	return <CollectionList {...rest} url={favoritesUrl} />
}

export default FavoritesList
