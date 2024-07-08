import React from 'react'
import {
  CollectionContainer,
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import CollectionGeoList from './CollectionGeoList'

export type CollectionGeoProps = 
  CollectionListProps & 
  CollectionContainerProps

const CollectionGeo: React.FC<CollectionGeoProps> = (props) => {
	
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
    displayFields,
    ...rest 
  } = props 

	return (
    <CollectionContainer
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
      <CollectionGeoList 
        url={url}
        displayFields={displayFields}
        { ...rest }
      />                 
    </CollectionContainer>
	)
}

export default CollectionGeo

