// Frontend uses filters in 3 formats. These are helper
// methods to convert between these formats.

// URL params
// The app uses syntax like this to pass filters in the URL:
// ?filters=()

export const mergeFilters = (filters, newFilters) => {
	if (!filters) return newFilters
	if (!newFilters) return filters
	let mergedFilters = [
    ...(filters || []), 
    ...(newFilters || [])
  ]	
	return mergedFilters
}

export const mergeAllFilters = (filters) => {
	if (filters.length === 0) {
		return []
	}

	return filters.reduce((mergedFilter, currentFilter) => {
		return mergeFilters(mergedFilter, currentFilter)
	}, [])
}

// Convert the query object into an array of filter options
export const formatFilterArray = (filters) => {
	let formattedFilters = []
	if (typeof filters === 'object') {
		Object.keys(filters).forEach((where) => {
			filters[where].forEach((filter) => {
				let field = Object.keys(filter)[0]
				let operator = Object.keys(filter[field])[0]
				let value = filter[field][operator]
				//@ts-ignore
				formattedFilters.push({
					where,
					field,
					operator,
					value,
				})
			})
		})
	}
	return formattedFilters
}
