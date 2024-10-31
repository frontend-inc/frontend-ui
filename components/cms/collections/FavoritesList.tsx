'use client'

import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

const FavoritesList: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <CollectionList query={query} {...rest} />
}

export default FavoritesList
