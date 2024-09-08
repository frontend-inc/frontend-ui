import React from 'react'
import { ProductGrid } from '../..'
import { ProductListProps } from './ProductList'

const ProductFavoritesGrid: React.FC<ProductListProps> = (props) => {
	
  let { 
    query = {}, 
    ...rest 
  } = props

	query = {
		...query,
		method: 'favorites',
	}

	return <ProductGrid query={query} {...rest} />
}

export default ProductFavoritesGrid
