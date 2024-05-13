import React, { useEffect } from 'react'
import { useDocuments } from 'frontend-js'
import Show from '../../cms/show/Show'
import { ShowProps } from '../../cms/show/Show'

const AuthShow: React.FC<ShowProps> = (props) => {
	
  let { handle } = props
  if(handle == 'index') handle = undefined;

  const {
		resource: _resource,
		contentType,
    ...rest
	} = props

  const {
		resource,    
		setResource,		
    findMany,
	} = useDocuments({
		collection: contentType,
	})

	const handleFetchResource = async () => {
		let resources
		let searchQuery = {
			page: 1,
			per_page: 1,
		}
		if (handle) {
			resources = await findMany({
				...searchQuery,
				filters: {
					AND: [{ handle: { eq: handle } }],
				},
			})
		} else {
			resources = await findMany(searchQuery)
		}
		if (resources?.length > 0) {
			setResource(resources[0])
		}
	}

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		} else if(contentType) {			
      handleFetchResource()		
		}
	}, [_resource, contentType, handle])

	return (
    <Show 
      handle={handle}
      resource={resource}
      contentType={contentType}
      { ...rest }
    />
  )
}

export default AuthShow
