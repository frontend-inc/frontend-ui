import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

const FeedList: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'social_feed',
	}

	return <CollectionList query={query} {...rest} />
}

export default FeedList
