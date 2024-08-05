import React from 'react'
import List from './List'
import { ListProps } from './List'

const SimilarList: React.FC<ListProps> = (props) => {
	return <List {...props} filterSimilar />
}

export default SimilarList
