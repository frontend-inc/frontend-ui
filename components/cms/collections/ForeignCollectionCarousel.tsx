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
    foreignUrl,
    foreignContentType,
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
      <CollectionCarouselList 
        { ...rest }
        url={foreignUrl}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollectionCarousel

