import React from 'react'
import { Collection } from '../..'
import { CollectionProps } from '../../cms/collections/Collection'

const Favorites: React.FC<CollectionProps> = (props) => {

  let { query={}, ...rest } = props

  query = {
    ...query,
    method: 'favorites'
  }

	return (
		<Collection 
      query={query}
      {...rest}
    />
	)
}

export default Favorites
