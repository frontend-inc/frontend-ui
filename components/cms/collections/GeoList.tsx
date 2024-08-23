import React from 'react'
import { CollectionList, GeoToolbar } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import GeoListItems from './GeoListItems'

export type GeoListProps = CollectionListProps

const GeoList: React.FC<GeoListProps> = (props) => {
	return(
    <CollectionList 
      {...props} 
      toolbar={ GeoToolbar }
      list={GeoListItems} 
    />
  )
}

export default GeoList
