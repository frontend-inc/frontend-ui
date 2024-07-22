import React from 'react'
import { ListToolbar, Query, DeleteModal, EditModal } from '../..'
import { ResourceProvider } from 'frontend-js'
import {
	DisplayFieldType,
	FormFieldType,
} from '../../../types'

export type ListContainerProps = {
	resource?: any
	url: string
	query?: any
	filterUser?: boolean // Find resources that belong to the current user
	filterTeam?: boolean // Find resources that belong to the current team
	filterRelated?: boolean // Find habtm resources
	filterGeo?: boolean // Find nearby resources using Geo search
	filterSimilar?: boolean // Find similar resources based on tags
	fields?: FormFieldType[]
	displayFields?: DisplayFieldType[]
	perPage?: number
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableCreate?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
	children: React.ReactNode
}

const ListContainer: React.FC<ListContainerProps> = (props) => {
	const {
		resource,
		url,
    query={},
		children,		
		fields = [],
		enableGeoSearch,
		enableSearch,
		enableCreate,
    enableFilters = true,
    enableSorting = true
	} = props

	return (
		<ResourceProvider name='document' url={url}>
			<Query query={query}>
				<ListToolbar
					url={url}
					query={query}					
					enableSearch={enableSearch}
					enableGeoSearch={enableGeoSearch}
					enableCreate={enableCreate}
          enableFilters={enableFilters}
          enableSorting={enableSorting}
				/>
				{children}
			</Query>
			<EditModal 
        fields={fields} 
        parentResource={resource} 
      />
      <DeleteModal />
		</ResourceProvider>
	)
}  

export default ListContainer
