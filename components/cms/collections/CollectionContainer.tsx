import React from 'react'
import { 
  CollectionToolbar, 
  Query,   
  ResourceForm 
} from '../..'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { 
  DisplayFieldType,
  FormFieldType, 
  SearchFilterOptionType, 
  SortOptionType 
} from '../../../types'

export type CollectionContainerProps = {
  resource?: any
  url: string
  query?: any
  filterUser?: boolean
  filterTeam?: boolean
  fields?: FormFieldType[]  
  displayFields?: DisplayFieldType[]
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: SortOptionType[]
  perPage?: number
  enableSearch?: boolean
  enableCreate?: boolean
  children: React.ReactNode
}

const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {

  const { 
    resource,
    url,
    children,
    query,
    filterUser=false,
    filterTeam=false,
    fields=[],    
    perPage=20,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,
  } = props 

  return(
    <QueryProvider url={url}>
      <ResourceProvider 
        url={url} 
        name='document'
      >
        <Query 
          query={query}
          filterUser={filterUser}
          filterTeam={filterTeam}
          perPage={perPage}
        >
          <CollectionToolbar
            url={url}
            query={query}
            perPage={perPage}
            filterUser={filterUser}
            filterTeam={filterTeam}  
            enableSearch={enableSearch}              
            filterOptions={filterOptions}
            sortOptions={sortOptions} 
            enableCreate={enableCreate}                 
          />
            { children }
        </Query>
        <ResourceForm 
          fields={fields}
          resource={resource}
        />
      </ResourceProvider>
    </QueryProvider>
  )
}

export default CollectionContainer