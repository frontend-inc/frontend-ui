import React from 'react'
import { DataList } from '../..'
import { DataListProps } from '../../cms/collections/DataList'

const Favorites: React.FC<DataListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <DataList query={query} {...rest} />
}

export default Favorites
