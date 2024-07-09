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
  filterRelated?: boolean
  fields?: FormFieldType[]  
  displayFields?: DisplayFieldType[]
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: SortOptionType[]
  perPage?: number
  enableSearch?: boolean
  enableGeoSearch?: boolean
  enableCreate?: boolean
  children: React.ReactNode
}

const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {

  const { 
    resource,
    url,
    children,    
    filterUser=false,
    filterTeam=false,
    filterRelated=false,
    fields=[],    
    perPage=20,
    enableGeoSearch,
    enableSearch,
    enableCreate,
    filterOptions,
    sortOptions,
  } = props 

  let { query={} } = props || {}

  if(filterRelated == true && resource?.id){
    query = { 
      ...query, 
      belongs_to: resource.id 
    }
  }else{
    query = { 
      ...query, 
      belongs_to: null
    }
  }
  
  if(filterUser == true ){
      query = { ...query, current_user: true }
  }else{
    query = { ...query, current_user: false }
  }

  if(filterTeam == true ){
    query = { ...query, current_team: true }
  }else{
    query = { ...query, current_team: false }
  }

  return(
    <QueryProvider url={url}>
      <ResourceProvider 
        url={url} 
        name='document'
      >
        <Query 
          query={query}
          perPage={perPage}
        >
          <CollectionToolbar
            url={url}
            query={query}
            perPage={perPage}
            filterUser={filterUser}
            filterTeam={filterTeam}  
            enableSearch={enableSearch}
            enableGeoSearch={enableGeoSearch}              
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