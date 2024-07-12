import React from 'react'
import Collection from './Collection'
import { CollectionProps } from './Collection'

const CollectionGeoNearby: React.FC<CollectionProps> = (props) => {

	return (
		<Collection					
      { ...props }
      filterGeo
		/>
	)
}

export default CollectionGeoNearby
