import React from 'react'
import DataList from './DataList'
import {DataListProps } from './DataList'

const SimilarList: React.FC<DataListProps> = (props) => {
	return <DataList {...props} filterSimilar />
}

export default SimilarList
