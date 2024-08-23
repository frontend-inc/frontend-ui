import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'

const Feed: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'social_feed',
	}

	return <CollectionList query={query} {...rest} />
}

export default Feed
