import React from 'react'
import { 
  CollectionToolbar, 
  Query, 
  ResourceForm 
} from '../..'
import { CollectionListProps } from './CollectionList'
import { FormProvider } from '../../../context'
import { QueryProvider, ResourceProvider } from 'frontend-js'
import { 
  FormFieldType, 
  SearchFilterOptionType, 
  SortOptionType 
} from '../../../types'

export type CollectionContainerProps = {
  url: string
  resourceUrl: string
  query?: any
  filterUser?: boolean
  filterTeam?: boolean
  fields?: FormFieldType[]  
  filterOptions?: SearchFilterOptionType[]
  sortOptions?: SortOptionType[]
  perPage?: number
  enableSearch?: boolean
  enableCreate?: boolean
  children: React.ReactNode
}

const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {

  const { 
    url,
    resourceUrl,
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
        url={resourceUrl} 
        name='document'
      >
        <FormProvider
          editFields={fields}
          createFields={fields}
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
          <ResourceForm />
        </FormProvider>
      </ResourceProvider>
    </QueryProvider>
  )
}

export default CollectionContainer