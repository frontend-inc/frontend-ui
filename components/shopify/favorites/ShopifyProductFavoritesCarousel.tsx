'use client'

import React from 'react'
import { Placeholder } from '../..'
import { ShopifyProductCarousel } from '..'
import { useFavorites } from 'frontend-shopify'

type ShopifyProductFavoritesCarouselProps = {
	title?: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableAutoPlay?: boolean
}

const ShopifyProductFavoritesCarousel: React.FC<
	ShopifyProductFavoritesCarouselProps
> = (props) => {
	const {
		enableBorder = false,
		enableAddToCart,
		enableQuantity,
		enableAutoPlay = false,
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<div className="w-full">
			<ShopifyProductCarousel
				products={favorites}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableAutoPlay={enableAutoPlay}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon='ri-heart-2-fill'
					title='No favorites'
					description='You have no favorites yet'
				/>
			)}
		</div>
	)
}

export default ShopifyProductFavoritesCarousel
