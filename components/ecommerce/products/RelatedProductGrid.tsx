import React from 'react'
import { ProductListProps } from './ProductList'
import { ProductGrid, RelatedProductListItems } from '../..'

const RelatedProductGrid: React.FC<ProductListProps> = (props) => {
	let { url, resource } = props
	url = `${url}/${resource?.id}/references`
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
