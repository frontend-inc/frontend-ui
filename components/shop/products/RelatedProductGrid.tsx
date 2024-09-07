import React from 'react'
import { ProductListProps } from './ProductList'
import { ProductGrid, RelatedProductListItems } from '../..'

const RelatedProductGrid: React.FC<ProductListProps> = (props) => {
	let { resource } = props
	const url = `/ecommerce/products/${resource?.id}/related_products`
	return (
		<ProductGrid
			{...props}
			url={url}
			resource={resource}
			list={RelatedProductListItems}
		/>
	)
}

export default RelatedProductGrid
