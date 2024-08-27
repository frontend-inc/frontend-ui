import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

const CollectionGrid: React.FC<CollectionListProps> = (props) => {
	return (
		<CollectionList
			{...props}
			grid
			perPage={9}
			style={props?.style || 'card'}
		/>
	)
}

export default CollectionGrid
