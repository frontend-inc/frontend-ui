import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'

const Favorites: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <CollectionList query={query} {...rest} />
}

export default Favorites
