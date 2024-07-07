import React from 'react'
import {
  CollectionContainer,
  CollectionList 
} from '../..'
import { CollectionListProps } from '../../cms/collections/CollectionList'
import { CollectionContainerProps } from '../../cms/collections/CollectionContainer'

export type FavoritesProps = 
  CollectionListProps & 
  CollectionContainerProps 

const Favorites: React.FC<FavoritesProps> = (props) => {
	
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

  let favoritesUrl = `${url}/favorites`

	return (
    <CollectionContainer
      url={favoritesUrl}        
      resourceUrl={url}
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

export default Favorites

