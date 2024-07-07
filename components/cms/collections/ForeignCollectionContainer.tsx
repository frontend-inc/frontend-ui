import React from 'react'
import {
  CollectionContainer,  
} from '../..'
import { CollectionContainerProps } from './CollectionContainer'

export type ForeignProps = {
  resource: any,
  foreignUrl: string,
  foreignContentType: string,  
} 

export type ForeignCollectionContainerProps = 
  CollectionContainerProps & 
  ForeignProps 

const ForeignCollectionContainer: React.FC<ForeignCollectionContainerProps> = (props) => {
	
  const { 
    resource,
    url,
    foreignUrl,
    foreignContentType,    
    resourceUrl,
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,    
    query={},
    filterUser,
    filterTeam,
    perPage,
    children,
    ...rest 
  } = props 

  const searchUrl = `${url}/${resource?.id}/${foreignContentType}`

	return (
    <CollectionContainer
      url={searchUrl}        
      resourceUrl={foreignUrl}
      query={query}
      filterUser={filterUser}
      filterTeam={filterTeam}
      perPage={perPage}                
      fields={fields}      
      enableSearch={enableSearch}
      enableCreate={enableCreate}    
      filterOptions={filterOptions}
      sortOptions={sortOptions}         
    >      
      { children }
    </CollectionContainer>
	)
}

export default ForeignCollectionContainer

