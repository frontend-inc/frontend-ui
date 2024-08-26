import React from 'react'
import CollectionGrid from './CollectionList'
import { CollectionListProps } from './CollectionList'

const SimilarGrid: React.FC<CollectionListProps> = (props) => {
	return <CollectionGrid {...props} filterSimilar />
}

export default SimilarGrid
