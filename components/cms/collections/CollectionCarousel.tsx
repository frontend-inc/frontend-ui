import React from 'react'
import {
  CollectionContainer  
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import { TableHeaderType } from '../../../types'
import CollectionCarouselList from './CollectionCarouselList'

export type CollectionCarouselProps = 
  CollectionListProps & 
  CollectionContainerProps & {
    headers: TableHeaderType[]
  }


const CollectionCarousel: React.FC<CollectionCarouselProps> = (props) => {
	
  const { 
    fields,
    enableSearch,
    enableCreate,
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
      url={url}        
      resourceUrl={url}
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
    </CollectionContainer>
	)
}

export default CollectionCarousel

