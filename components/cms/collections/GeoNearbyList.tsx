import React from 'react'
import DataList from './DataList'
import { DataListProps } from './DataList'

const GeoNearbyList: React.FC<DataListProps> = (props) => {
	return <DataList {...props} filterGeo />
}

export default GeoNearbyList
