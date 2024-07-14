import React from 'react'
import { List } from '../..'
import { ListProps } from '../../cms/collections/List'

const Feed: React.FC<ListProps> = (props) => {

  let { query={}, ...rest } = props

  query = {
    ...query,
    method: 'social_feed'
  }

	return (
		<List 
      query={query}
      {...rest}
    />
	)
}

export default Feed
