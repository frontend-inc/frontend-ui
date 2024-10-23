export const buildSearchQuery = (params) => {
	let { query = {} } = params || {}
	const { resource, perPage, filterReferences, filterGeo, filterSimilar } =
		params || {}

	if (perPage) {
		query = {
			...query,
			per_page: perPage,
		}
	}

	if (filterReferences == true && resource?.id) {
		query = {
			...query,
			method: 'references',
			resource_id: resource.id,
		}
	} else {
		query = {
			...query,
			resource_id: null,
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
	return query
}
