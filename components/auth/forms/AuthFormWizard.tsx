import React, { useEffect } from 'react'
import { useDocuments } from 'frontend-js'
import FormWizard from '../../cms/forms/FormWizard'
import { FormWizardProps } from '../../cms/forms/FormWizard'

type RouterProps = {
  handle: string | null 
}

const AuthFormWizard: React.FC<FormWizardProps> = (props) => {
	
  let { handle } = props as RouterProps
  if(handle == 'index') handle = null;

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
		resources = await findMany(searchQuery)
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
  if(!resource?.id) return null;
	return (
    <FormWizard 
      { ...rest }
      resource={resource}
      contentType={contentType}
      handle={resource?.handle}      
    />
  )
}

export default AuthFormWizard
