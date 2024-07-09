import React from 'react'
import {
  CollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionSimilarProps = 
  CollectionListProps & 
  CollectionContainerProps & {
    resource: any
  }

const CollectionSimilar: React.FC<CollectionSimilarProps> = (props) => {
	
  const { 
    resource,
    enableSearch,
    filterOptions,
    sortOptions,
    url,
    query={},
    filterUser,
    filterTeam,
    perPage,
    ...rest 
  } = props 

	return (
    <CollectionContainer
      resource={resource}
      url={url}        
      query={query}
      filterSimilar
      filterUser={filterUser}
      filterTeam={filterTeam}
      perPage={perPage}                
      enableSearch={enableSearch}
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

export default CollectionSimilar