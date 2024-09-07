import React from 'react'
import ProductGrid from './ProductList'
import { ProductListProps } from './ProductList'

const ProductSimilarGrid: React.FC<ProductListProps> = (props) => {
	return <ProductGrid {...props} filterSimilar />
}

export default ProductSimilarGrid
