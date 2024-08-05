import React from 'react'
import { List } from '../..'
import { ListProps } from '../../cms/collections/List'

const Favorites: React.FC<ListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <List query={query} {...rest} />
}

export default Favorites
