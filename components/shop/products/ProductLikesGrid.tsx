import React from 'react'
import { ProductGrid } from '../..'
import { ProductListProps } from './ProductList'

const ProductLikesGrid: React.FC<ProductListProps> = (props) => {
	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'likes',
	}

	return <ProductGrid query={query} {...rest} />
}

export default ProductLikesGrid
