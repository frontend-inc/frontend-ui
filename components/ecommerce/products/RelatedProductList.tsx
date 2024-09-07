import React from 'react'
import { ProductListProps } from './ProductList'
import { ProductList, RelatedProductListItems } from '../..'

const RelatedProductList: React.FC<ProductListProps> = (props) => {
	let { url, resource } = props
	url = `${url}/${resource?.id}/references`
	return (
		<ProductList
			{...props}
			url={url}
			resource={resource}
			list={RelatedProductListItems}
		/>
	)
}

export default RelatedProductList
