import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from './ProductList'

const ProductGrid: React.FC<ProductListProps> = (props) => {
	return (
		<ProductList {...props} grid perPage={9} style={props?.style || 'card'} />
	)
}

export default ProductGrid
