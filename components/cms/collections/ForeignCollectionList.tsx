import React from 'react'
import { CollectionContainer } from '../../../components'
import { CollectionListProps } from './CollectionList'

export type ForeignCollectionListProps = CollectionListProps & {	
	resource: any
	url: string
	foreignUrl: string
	foreignContentType?: string
}

const ForeignCollectionList: React.FC<ForeignCollectionListProps> = (props) => {
	
	const {
		resource,
		url,
		foreignUrl,
		foreignContentType,
    ...rest
	} = props

	return (
    <CollectionContainer 
      {...rest}
      url={foreignUrl}
      searchUrl={`${url}/${resource?.id}/${foreignContentType}`}
      resource={resource}      
    />
	)
}

export default ForeignCollectionList
