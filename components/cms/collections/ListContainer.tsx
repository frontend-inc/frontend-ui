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
		children,
		perPage = 12,
		filterUser = false,
		filterTeam = false,
		filterRelated = false,
		filterGeo = false,
		filterSimilar = false,
		fields = [],
		enableGeoSearch,
		enableSearch,
		enableCreate,
    enableFilters = true,
    enableSorting = true
	} = props

	let { query = {} } = props || {}

  if(perPage){
    query = {
      ...query,
      per_page: perPage 
    }
  }

	if (filterRelated == true && resource?.id) {
		query = {
			...query,
      method: 'related',
			resource_id: resource.id,
		}
	} else {
		query = {
			...query,
			resource_id: null,
		}
	}

	if (filterUser == true) {
		query = { 
      ...query, 
      current_user: true 
    }
	} else {
		query = { 
      ...query, 
      current_user: false 
    }
	}

	if (filterTeam == true) {
		query = { 
      ...query, 
      current_team: true 
    }
	} else {
		query = { 
      ...query, 
      current_team: false 
    }
	}

	if (filterGeo == true && resource?.location) {
		query = {
			...query,
      method: 'location',
			location: resource?.location,
		}
	}

	if (filterSimilar == true && resource?.id) {
		query = {
			...query,
      method: 'similar',
			resource_id: resource?.id,
		}
	}

	return (
		<ResourceProvider name='document' url={url}>
			<Query query={query}>
				<ListToolbar
					url={url}
					query={query}
					perPage={perPage}
					filterUser={filterUser}
					filterTeam={filterTeam}
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
