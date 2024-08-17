import React from 'react'
import { DataList } from '../..'
import { DataListProps } from '../../cms/collections/DataList'

const Likes: React.FC<DataListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <DataList query={query} {...rest} />
}

export default Likes
