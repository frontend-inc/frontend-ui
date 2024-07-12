import React from 'react'
import Collection from './Collection'
import { CollectionProps } from './Collection'

const CollectionSimilar: React.FC<CollectionProps> = (props) => {

	return (
		<Collection					
      { ...props }
      filterSimilar
		/>
	)
}

export default CollectionSimilar
