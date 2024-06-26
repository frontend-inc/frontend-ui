import React from 'react'
import { CollectionKanBan } from '../..'
import { CollectionKanBanProps } from './CollectionKanBan'

export type ForeignCollectionKanBanProps = CollectionKanBanProps & {	
	resource: any
	url: string
	foreignUrl: string
	foreignContentType?: string
}

const ForeignCollectionKanBan: React.FC<ForeignCollectionKanBanProps> = (props) => {
	
	const {
		resource,
		url,
		foreignUrl,
		foreignContentType,
    ...rest
	} = props

	return (
    <CollectionKanBan        
      {...rest}
      url={foreignUrl}
      resource={resource}
      searchUrl={`${url}/${resource?.id}/${foreignContentType}`}
    />
	)
}

export default ForeignCollectionKanBan
