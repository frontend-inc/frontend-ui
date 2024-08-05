import React from 'react'
import { List } from '../..'
import { ListProps } from '../../cms/collections/List'

const Likes: React.FC<ListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <List query={query} {...rest} />
}

export default Likes
