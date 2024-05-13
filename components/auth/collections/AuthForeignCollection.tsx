import React, { useEffect } from 'react'
import { useDocuments } from 'frontend-js'
import ForeignCollection from '../../cms/collections/ForeignCollection'
import { ForeignCollectionProps } from '../../cms/collections/ForeignCollection'

const AuthForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	const {
		resource: _resource,
		contentType,
    ...rest
	} = props

  const {
		resource,    
    findMany,
		setResource,		
	} = useDocuments({
		collection: contentType,
	})

	const handleFetchResource = async () => {
		let searchQuery = {
			page: 1,
			per_page: 1,
		}
		let resp = await findMany(searchQuery)
		if (resp?.length > 0) {
			setResource(resp[0])
		}
	}

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		} else if(contentType) {
			handleFetchResource()			
		}
	}, [_resource, contentType])

	return (
    <ForeignCollection 
      resource={resource}
      contentType={contentType}
      { ...rest }
    />
  )
}

export default AuthForeignCollection
