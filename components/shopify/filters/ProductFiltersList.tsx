import React from 'react'
import {
	FilterList,
  CheckboxFilterList,
} from '..'
import { SearchFilterType } from 'frontend-shopify'
import { Stack } from '@mui/material'
import { SHOPIFY_SEARCH_FILTERS } from '../../../constants'

type ProductFiltersListProps = {
	filters: SearchFilterType[]
	options: SearchFilterType[]  
  handleFilter: (filter: SearchFilterType) => void
  handleFilterArray: (filter: SearchFilterType) => void
}

const ProductFiltersList: React.FC<ProductFiltersListProps> = (props) => {

	const {
		filters=[],
    options=[],
    handleFilter,
    handleFilterArray,    
  } = props

	return (
    <Stack spacing={0}>
      { SHOPIFY_SEARCH_FILTERS.map((filterType, i) => {
        let currentFilters = filters?.filter(f => f.name == filterType.value)
        let currentOptions = options?.filter(f => f.name == filterType.value)
        if(currentOptions.length == 0) return null;
        return(
          <FilterList label={ filterType.label } count={currentFilters.length}>
            <CheckboxFilterList
              filters={currentFilters}
              options={currentOptions}
              handleClick={
                filterType.array ? handleFilterArray : handleFilter 
              }
            />
          </FilterList>
        )
      })}
    </Stack>
	)
}

export default ProductFiltersList
