import React from 'react'
import { CollectionGrid } from '../..'
import { CollectionListProps } from './CollectionList'

const LikesGrid: React.FC<CollectionListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <CollectionGrid query={query} {...rest} />
}

export default LikesGrid
