import React from 'react'
import { DataList } from '../..'
import { DataListProps } from '../../cms/collections/DataList'

const Feed: React.FC<DataListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'social_feed',
	}

	return <DataList query={query} {...rest} />
}

export default Feed
