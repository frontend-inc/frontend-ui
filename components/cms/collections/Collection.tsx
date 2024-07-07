import React from 'react'
import {
  CollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionProps = 
  CollectionListProps & 
  CollectionContainerProps

const Collection: React.FC<CollectionProps> = (props) => {
	
  const { 
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,
    url,
    resourceUrl,
    query={},
    filterUser,
    filterTeam,
    perPage,
    ...rest 
  } = props 

	return (
    <CollectionContainer
      url={url}        
      resourceUrl={resourceUrl || url}
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
    </CollectionContainer>
	)
}

export default Collection

