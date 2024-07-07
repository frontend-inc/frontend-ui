import React from 'react'
import {
  ForeignCollectionContainer,
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import CollectionGeoList from './CollectionGeoList'

export type ForeignProps = {
  resource: any,
  foreignUrl: string,
  foreignContentType: string,  
} 

export type ForeignCollectionGeoProps = 
  CollectionListProps & 
  CollectionContainerProps & 
  ForeignProps 

const ForeignCollectionGeo: React.FC<ForeignCollectionGeoProps> = (props) => {
	
  const { 
    resource,
    url,
    foreignUrl,
    foreignContentType,    
    resourceUrl,
    fields,
    displayFields=[],
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
      <CollectionGeoList 
        { ...rest }
        url={foreignUrl}
        displayFields={displayFields}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollectionGeo

