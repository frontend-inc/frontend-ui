export const buildSearchQuery = (params) => {

  let { query = {} } = params || {}
  const { 
    resource,
    perPage,
    filterUser,
    filterTeam,
    filterReferences,
    filterGeo,
    filterSimilar    
  } = params || {}

  if(perPage){
    query = {
      ...query,
      per_page: perPage 
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
  return query
}