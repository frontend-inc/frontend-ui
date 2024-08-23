import React from 'react'
import { CollectionList, GeoToolbar } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import GeoListItems from './GeoListItems'

const GeoList: React.FC<CollectionListProps> = (props) => {
	return(
    <CollectionList 
      {...props} 
      toolbar={ GeoToolbar }
      list={GeoListItems} 
    />
  )
}

export default GeoList
