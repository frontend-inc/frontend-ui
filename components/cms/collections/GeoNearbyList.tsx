import React from 'react'
import DataList from '../data/DataList'
import { DataListProps } from '../data/DataList'

const GeoNearbyList: React.FC<DataListProps> = (props) => {
	return <DataList {...props} filterGeo />
}

export default GeoNearbyList
