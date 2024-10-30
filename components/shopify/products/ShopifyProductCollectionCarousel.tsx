'use client'

import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { ShopifyProductCarousel } from '../../../components/shopify'

export type ShopifyProductCollectionCarouselProps = {
	href: string
	handle: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
}

const ShopifyProductCollectionCarousel: React.FC<
	ShopifyProductCollectionCarouselProps
> = (props) => {
	const {
		handle,
		href,
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
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
			enableArrows={enableArrows}
			enableDots={enableDots}
			enableBorder={enableBorder}
			enableAddToCart={enableAddToCart}
			enableQuickShop={enableQuickShop}
			enableQuantity={enableQuantity}
		/>
	)
}

export default ShopifyProductCollectionCarousel
