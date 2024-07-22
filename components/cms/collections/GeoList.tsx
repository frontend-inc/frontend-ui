import React from 'react'
import { List } from '../..'
import { ListItemsProps } from './ListItems'
import { ListContainerProps } from './ListContainer'
import GeoListItems from './GeoListItems'

export type GeoListProps = ListItemsProps & ListContainerProps

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
