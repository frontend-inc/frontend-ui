import React from 'react'
import {
  ForeignCollectionContainer  
} from '../..'
import { CollectionListProps } from './CollectionList'
import { ForeignCollectionContainerProps } from './ForeignCollectionContainer'
import CollectionCarouselList from './CollectionCarouselList'

export type ForeignCollectionCarouselProps = 
  CollectionListProps & 
  ForeignCollectionContainerProps


const ForeignCollectionCarousel: React.FC<ForeignCollectionCarouselProps> = (props) => {
	
  const { 
    url,
    resource,    
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

	return (
    <ForeignCollectionContainer
      url={url}        
      resource={resource}
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
      <CollectionCarouselList 
        { ...rest }
        url={url}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollectionCarousel

