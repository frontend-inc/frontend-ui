import React from 'react'
import { CollectionToolbar, Query, CollectionDeleteModal, CollectionFormModal } from '../..'
import { CollectionProvider } from 'frontend-js'
import {
	DisplayFieldType,
	FormFieldType,
	SearchFilterOptionType,
	SortOptionType,
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
		filterOptions,
		sortOptions,
	} = props

	let { query = {} } = props || {}

	if (filterRelated == true && resource?.id) {
		query = {
			...query,
			belongs_to: resource.id,
		}
	} else {
		query = {
			...query,
			belongs_to: null,
		}
	}

	if (filterUser == true) {
		query = { ...query, current_user: true }
	} else {
		query = { ...query, current_user: false }
	}

	if (filterTeam == true) {
		query = { ...query, current_team: true }
	} else {
		query = { ...query, current_team: false }
	}

	if (filterGeo == true && resource?.location) {
		query = {
			...query,
			location: resource?.location,
		}
	}

	if (filterSimilar == true && resource?.id) {
		query = {
			...query,
			similar_to: resource?.id,
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
					filterOptions={filterOptions}
					sortOptions={sortOptions}
					enableCreate={enableCreate}
				/>
				{children}
			</Query>
			<CollectionFormModal fields={fields} parentResource={resource} />
      <CollectionDeleteModal />
		</CollectionProvider>
	)
}

export default CollectionContainer
