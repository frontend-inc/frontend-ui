import React from 'react'
import { CollectionGrid } from '../..'
import { CollectionListProps } from './CollectionList'

const FavoritesGrid: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <CollectionGrid query={query} {...rest} />
}

export default FavoritesGrid
