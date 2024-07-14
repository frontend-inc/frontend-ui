import React from 'react'
import List from './List'
import { ListProps } from './List'

const GeoNearbyList: React.FC<ListProps> = (props) => {

	return (
		<List					
      { ...props }
      filterGeo
		/>
	)
}

export default GeoNearbyList
