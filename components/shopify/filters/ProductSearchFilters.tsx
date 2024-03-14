import React from 'react'
import ProductFiltersList from './ProductFiltersList'
import { SearchFilterType } from 'frontend-shopify'

type ProductFilterButtonProps = {
	filters: SearchFilterType[]
  options: SearchFilterType[]  
	handleFilter: (filter: SearchFilterType) => void	
  handleFilterArray: (filter: SearchFilterType) => void	
}

const ProductSearchFilters: React.FC<ProductFilterButtonProps> = (props) => {

	const {
		filters = [],
    options = [],
		handleFilter,
		handleFilterArray		
	} = props

	return (
    <ProductFiltersList 
      filters={filters}
      options={ options }      
      handleFilter={handleFilter}
      handleFilterArray={handleFilterArray}      
    />
	)
}

export default ProductSearchFilters
