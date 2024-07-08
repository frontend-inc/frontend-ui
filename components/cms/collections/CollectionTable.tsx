import React from 'react'
import {
  CollectionContainer,
  CollectionTableList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { CollectionContainerProps } from './CollectionContainer'
import { TableHeaderType } from '../../../types'

export type CollectionTableProps = 
  CollectionListProps & 
  CollectionContainerProps & {
    headers: TableHeaderType[]
  }


const CollectionTable: React.FC<CollectionTableProps> = (props) => {
	
  const { 
    resource,
    fields,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,
    url,
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
      enableCreate={enableCreate}    
      filterOptions={filterOptions}
      sortOptions={sortOptions}         
    >      
      <CollectionTableList 
        { ...rest }
        url={url}
      />                
    </CollectionContainer>
	)
}

export default CollectionTable

