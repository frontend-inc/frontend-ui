import React from 'react'
import DataList from '../data/DataList'
import {DataListProps } from '../data/DataList'

const SimilarList: React.FC<DataListProps> = (props) => {
	return <DataList {...props} filterSimilar />
}

export default SimilarList
