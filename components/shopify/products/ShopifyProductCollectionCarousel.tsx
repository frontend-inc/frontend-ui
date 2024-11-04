'use client'

import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { ShopifyProductCarousel } from '../../../components/shopify'

export type ShopifyProductCollectionCarouselProps = {
	handle: string
	enableAutoPlay?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProductCollectionCarousel: React.FC<
	ShopifyProductCollectionCarouselProps
> = (props) => {
	const {
		handle,
		enableAutoPlay = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
	} = props

	const { loading, products, findCollection } = useCollections()

	useEffect(() => {
		if (handle) {
			findCollection(handle)
		}
	}, [handle])

	return (
		<ShopifyProductCarousel
			loading={loading}
			products={products}
			enableAutoPlay={enableAutoPlay}
			enableBorder={enableBorder}
			enableAddToCart={enableAddToCart}
			enableQuantity={enableQuantity}
		/>
	)
}

export default ShopifyProductCollectionCarousel
