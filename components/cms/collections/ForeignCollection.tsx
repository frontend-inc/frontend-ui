import React from 'react'
import {
  ForeignCollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type ForeignProps = {
  resource: any,
} 

export type ForeignCollectionProps = 
  CollectionListProps & 
  CollectionContainerProps & 
  ForeignProps 

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	
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
    query={},
    ...rest 
  } = props 

	return (
    <ForeignCollectionContainer 
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
      <CollectionList 
        { ...rest }
        url={url}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollection

