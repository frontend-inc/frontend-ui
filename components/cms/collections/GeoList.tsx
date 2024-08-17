import React from 'react'
import { DataList } from '../..'
import { DataListProps } from './DataList'
import GeoListItems from './GeoListItems'

export type GeoListProps = DataListProps

const GeoList: React.FC<GeoListProps> = (props) => {
	return <DataList {...props} enableGeoSearch list={GeoListItems} />
}

export default GeoList
