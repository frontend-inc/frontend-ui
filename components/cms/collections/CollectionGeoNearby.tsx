import React from 'react'
import {
  CollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'

export type CollectionGeoNearbyProps = 
  CollectionListProps & 
  CollectionContainerProps & {
    resource: any
  }

const CollectionGeoNearby: React.FC<CollectionGeoNearbyProps> = (props) => {
	
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
      filterGeo
      resource={resource}
      url={url}        
      query={query}      
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

export default CollectionGeoNearby