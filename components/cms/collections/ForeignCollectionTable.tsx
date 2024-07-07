import React from 'react'
import {
  ForeignCollectionContainer,
  CollectionTableList 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { ForeignCollectionProps } from './ForeignCollection'
import { TableHeaderType } from '../../../types'

export type ForeignCollectionTableProps = 
  ForeignCollectionProps & {
    headers: TableHeaderType[]
  }


const ForeignCollectionTable: React.FC<ForeignCollectionTableProps> = (props) => {
	
  const { 
    resource,
    url,
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
      <CollectionTableList 
        { ...rest }
        url={foreignUrl}
      />                
    </ForeignCollectionContainer>
	)
}

export default ForeignCollectionTable

