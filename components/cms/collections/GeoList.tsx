'use client'

import React from 'react'
import { CollectionList, GeoHeader } from '../..'
import { CollectionListProps } from '../collections/CollectionList'
import GeoListItems from './GeoListItems'

export type GeoListProps = CollectionListProps

const GeoList: React.FC<GeoListProps> = (props) => {
  let { url, ...rest } = props
  const geosearchUrl = `${url}/geosearch`

	return(
    <CollectionList 
      {...rest} 
      url={ geosearchUrl } 
      header={GeoHeader} 
      list={GeoListItems} 
    />
  )
}

export default GeoList
