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
	enableQuickShop?: boolean
  enableAutoPlay?: boolean
	buttonText?: string
}

const ShopifyProductFavoritesCarousel: React.FC<
	ShopifyProductFavoritesCarouselProps
> = (props) => {
	const {
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
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
				enableQuickShop={enableQuickShop}
				buttonText={buttonText}
				enableAutoPlay={enableAutoPlay}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon={'Heart'}
					title={'No favorites'}
					description={'You have no favorites yet'}
				/>
			)}
		</div>
	)
}

export default ShopifyProductFavoritesCarousel
