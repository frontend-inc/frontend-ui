import React from 'react'
import { CollectionGrid } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'

const Favorites: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <CollectionGrid query={query} {...rest} />
}

export default Favorites
