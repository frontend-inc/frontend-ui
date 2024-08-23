import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'

const Likes: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <CollectionList query={query} {...rest} />
}

export default Likes
