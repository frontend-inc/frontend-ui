'use client'

import React from 'react'
import { ProductList, ProductCarouselListItems } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useApp } from '../../../hooks'

export type CollectionProductsCarouselProps = ProductListProps & {
	productCollectionId: string
	enableArrows?: boolean
	enableAutoplay?: boolean
}

const CollectionProductsCarousel: React.FC<CollectionProductsCarouselProps> = (
	props
) => {


  const { apiUrl } = useApp()
	const {
		productCollectionId,
		enableArrows,
		enableAutoplay,
		...rest
	} = props


	const slots = {
		list: {
			enableArrows,
			enableAutoplay,
		},
	}

  const url = `${apiUrl}/shop/product_collections/${productCollectionId}/products`

	return (
		<ProductList
			{...rest}
			
      url={ url }
			list={ProductCarouselListItems}
			slots={slots}
		/>
	)
}

export default CollectionProductsCarousel
