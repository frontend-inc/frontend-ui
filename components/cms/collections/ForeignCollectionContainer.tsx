import React from 'react'
import {
  CollectionContainer,  
} from '../..'
import { CollectionContainerProps } from './CollectionContainer'

export type ForeignProps = {
  resource: any,
} 

export type ForeignCollectionContainerProps = 
  CollectionContainerProps & 
  ForeignProps 

const ForeignCollectionContainer: React.FC<ForeignCollectionContainerProps> = (props) => {
	
  const { 
    resource,
    url,
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,    
    filterUser,
    filterTeam,
    perPage,
    children,
    ...rest 
  } = props 

  let { query={} } = props || {}

  // The CMS documents server handles the 
  // the belongs_to query parameter 
  if(resource?.id){
    query = {
      ...query,
      belongs_to: resource?.id
    }
  }

	return (
    <CollectionContainer
      resource={resource}
      url={url}              
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

