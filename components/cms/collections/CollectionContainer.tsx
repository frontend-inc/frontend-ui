import React from 'react'
import { CollectionToolbar, Query, CollectionDeleteModal, CollectionFormModal } from '../..'
import { CollectionProvider } from 'frontend-js'
import {
	DisplayFieldType,
	FormFieldType,
} from '../../../types'

export type CollectionContainerProps = {
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

const CollectionContainer: React.FC<CollectionContainerProps> = (props) => {
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
		<CollectionProvider url={url}>
			<Query query={query} perPage={perPage}>
				<CollectionToolbar
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
			<CollectionFormModal 
        fields={fields} 
        parentResource={resource} 
      />
      <CollectionDeleteModal />
		</CollectionProvider>
	)
}

export default CollectionContainer
