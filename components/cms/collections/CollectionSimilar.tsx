import React from 'react'
import { CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

export type CollectionSimilarProps = CollectionListProps & {
	resource: any 
}

const CollectionSimilar: React.FC<CollectionSimilarProps> = (props) => {
	const { url, resource, ...rest } = props

  if(!resource?.id && url) return null;
	return (
		<CollectionList
			url={`${url}/${resource?.id}/similar`}
			// Todo: Component errors without a default value
			query={{}}
			{...rest}
		/>
	)
}

export default CollectionSimilar
