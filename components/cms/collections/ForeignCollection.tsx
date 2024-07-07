import React from 'react'
import {
  ForeignCollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type ForeignProps = {
  resource: any,
  foreignUrl: string,
  foreignContentType: string,  
} 

export type ForeignCollectionProps = 
  CollectionListProps & 
  CollectionContainerProps & 
  ForeignProps 

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	
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
    ...rest 
  } = props 

  const searchUrl = `${url}/${resource?.id}/${foreignContentType}`

	return (
    <ForeignCollectionContainer 
      resource={resource}
      url={searchUrl}    
      foreignUrl={foreignUrl}
      foreignContentType={foreignContentType}    
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
      <CollectionList 
        { ...rest }
        url={foreignUrl}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollection

