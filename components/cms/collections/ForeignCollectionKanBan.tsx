import React from 'react'
import {
  ForeignCollectionContainer,
} from '../..'
import { CollectionListProps } from './CollectionList'
import { ForeignCollectionContainerProps } from './ForeignCollectionContainer'
import CollectionKanBanList from './CollectionKanBanList'

export type ForeignCollectionKanBanProps = 
  CollectionListProps & 
  ForeignCollectionContainerProps & {
    headers: {
      label: string 
      value: string 
    }[]
  }

const CollectionKanBan: React.FC<ForeignCollectionKanBanProps> = (props) => {
	
  const { 
    url,
    resource,
    headers=[],
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
      resource={resource}
      url={url}        
      query={query}
      filterUser={filterUser}
      filterTeam={filterTeam}
      perPage={perPage}                
      fields={fields}      
      enableSearch={enableSearch}      
      filterOptions={filterOptions}             
    >      
      <CollectionKanBanList 
        { ...rest }
        headers={headers}
        url={foreignUrl}
      />                
    </ForeignCollectionContainer>
	)
}

export default CollectionKanBan

