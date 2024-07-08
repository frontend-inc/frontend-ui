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
      <CollectionTableList 
        { ...rest }
        url={url}
      />                
    </CollectionContainer>
	)
}

export default CollectionTable

