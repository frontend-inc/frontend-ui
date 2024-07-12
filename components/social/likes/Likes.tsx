import React from 'react'
import { Collection } from '../..'
import { CollectionProps } from '../../cms/collections/Collection'

const Likes: React.FC<CollectionProps> = (props) => {

  let { query={}, ...rest } = props

  query = {
    ...query,
    method: 'likes'
  }

	return (
		<Collection 
      query={query}
      {...rest}
    />
	)
}

export default Likes
