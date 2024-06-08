import React from 'react'
import CollectionContainer from './CollectionContainer'
import { CollectionListProps } from './CollectionList'

export type ForeignCollectionProps = CollectionListProps & {	
	resource: any
	url: string
	foreignUrl: string
	foreignContentType?: string
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	
	const {
		resource,
		url,
		foreignUrl,
		foreignContentType,
    ...rest
	} = props

	return (
    <CollectionContainer 
      url={foreignUrl}
      searchUrl={`${url}/${resource?.id}/${foreignContentType}`}
      resource={resource}
      {...rest}
    />
	)
}

export default ForeignCollection
