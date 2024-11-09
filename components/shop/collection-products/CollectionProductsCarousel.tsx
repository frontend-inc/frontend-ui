'use client'

import React from 'react'
import { ProductList, ProductCarouselListItems } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useApp } from '../../../hooks'

export type CollectionProductsCarouselProps = ProductListProps & {
	productCollectionId: string
	enableAutoplay?: boolean
}

const CollectionProductsCarousel: React.FC<CollectionProductsCarouselProps> = (
	props
) => {
	const { apiUrl } = useApp()
	const { productCollectionId, enableAutoplay, ...rest } = props

	const slots = {
		list: {
			enableAutoplay,
		},
	}

	const url = `${apiUrl}/shop/product_collections/${productCollectionId}/products`

	return (
		<ProductList
			{...rest}
			url={url}
			list={ProductCarouselListItems}
			slots={slots}
		/>
	)
}

export default CollectionProductsCarousel
