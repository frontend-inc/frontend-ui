import React from 'react'
import { Collection } from '../..'
import { CollectionProps } from '../../cms/collections/Collection'

const Feed: React.FC<CollectionProps> = (props) => {

  let { query={}, ...rest } = props

  query = {
    ...query,
    method: 'social_feed'
  }

	return (
		<Collection 
      query={query}
      {...rest}
    />
	)
}

export default Feed
