import React from 'react'
import {
  CollectionContainer,
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import CollectionKanBanList from './CollectionKanBanList'

export type CollectionKanBanProps = 
  CollectionListProps & 
  CollectionContainerProps & {
    headers: {
      label: string 
      value: string 
    }[]    
  }

const CollectionKanBan: React.FC<CollectionKanBanProps> = (props) => {
	
  const { 
    resource,
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,
    url,
    headers=[],
    query={},
    filterUser,
    filterTeam,
    filterRelated,
    perPage,
    ...rest 
  } = props 

	return (
    <CollectionContainer
      resource={resource}
      url={url}        
      query={query}
      filterUser={filterUser}
      filterTeam={filterTeam}
      filterRelated={filterRelated}
      perPage={perPage}                
      fields={fields}      
      enableSearch={enableSearch}      
      filterOptions={filterOptions}             
    >      
      <CollectionKanBanList 
        { ...rest }
        url={url}
        headers={headers}
      />                
    </CollectionContainer>
	)
}

export default CollectionKanBan

