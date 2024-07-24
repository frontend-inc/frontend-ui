import React from 'react'
import { List } from '../..'
import { ListProps } from './List'
import GeoListItems from './GeoListItems'

export type GeoListProps = ListProps

const GeoList: React.FC<GeoListProps> = (props) => {	

	return (
		<List			
      { ...props }
			enableGeoSearch
			list={ GeoListItems }
		/>
	)
}

export default GeoList
