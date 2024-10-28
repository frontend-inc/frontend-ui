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
      sort_by: 'position',
      sort_direction: 'asc',
			resource_id: resource.id,
		}
	} else {
		query = {
			...query,
      sort_by: 'position',
      sort_direction: 'asc',
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

type DisplayFieldParams = {
  displaySubtitle?: boolean
  displayCategory?: boolean
  displayDescription?: boolean
  displayLocation?: boolean
  displayTags?: boolean
}

export const buildDisplayFields = (params: DisplayFieldParams) => {
  
  const { 
    displaySubtitle,
    displayCategory,
    displayDescription,
    displayLocation,
    displayTags
  } = params || {}

  let displayFields = [] as any[]

  const categoryField = {      
    label: 'Category',
    variant: 'string',
    name: 'category',
    position: 1,
  }

  const subtitleField = {      
    label: 'Subtitle',
    variant: 'string',
    name: 'subtitle',
    position: 2,
  }  

  const locationField = {      
    label: 'Location',
    variant: 'string',
    name: 'location',
    position: 3,
  }  

  const tagsField = {          
    label: 'Tags',
    variant: 'array',
    name: 'tags',
    position: 4,
  }  

  const descriptionField = {
    label: 'Description',
    variant: 'text',
    name: 'description',
    position: 5,
  }

  if(displaySubtitle) displayFields.push(subtitleField);
  if(displayCategory) displayFields.push(categoryField);
  if(displayDescription) displayFields.push(descriptionField);
  if(displayLocation) displayFields.push(locationField);
  if(displayTags) displayFields.push(tagsField);
    
  return displayFields
}


type SortFieldParams = {
  sortPosition?: boolean
  sortTitle?: boolean
  sortName?: boolean
  sortDate?: boolean
  sortPublished?: boolean
  sortPrice?: boolean
}

export const buildSortFields = (params: SortFieldParams) => {
  
  const {
    sortPosition,
    sortTitle,
    sortName,
    sortDate,
    sortPublished,
    sortPrice
  } = params || {}

  const positionField = {
    label: 'Default',
    name: 'position',
    position: 1,
  }

  const titleField = {
    label: 'Title',
    name: 'title',
    position: 2,
  }

  const nameField = {
    label: 'Name',
    name: 'name',
    position: 3,
  }

  const dateField = {
    label: 'Date',
    name: 'created_at',
    position: 4,
  }

  const publishedField = {
    label: 'Published',
    name: 'published_at',
    position: 4,
  }

  const priceField = {
    label: 'Price',
    name: 'price',
    position: 5,
  }

  let sortFields = [] as any[]

  if(sortPosition) sortFields.push(positionField);
  if(sortTitle) sortFields.push(titleField);
  if(sortName) sortFields.push(nameField);
  if(sortDate) sortFields.push(dateField);
  if(sortPublished) sortFields.push(publishedField); 
  if(sortPrice) sortFields.push(priceField);

  return sortFields
}

export const buildFilterFields = (params: { filterChoices: string[] }) => {
  
  const { filterChoices } = params || {}
    
  let categoryFilter = {
    label: 'Filter',
    name: 'category',
    variant: 'multiple_choice',
    options: filterChoices?.map((option) => ({
      label: option,
      value: option 
    }))
  }        

  return [categoryFilter]
}