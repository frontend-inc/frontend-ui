'use client'

import React from 'react'
import { Placeholder } from '../..'
import { ShopifyProducts, ShopifyProductCarousel } from '..'
import { useRecentlyViewed } from 'frontend-shopify'

export type ShopifyRecentlyViewedProps = {
	layout?: 'grid' | 'carousel'
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	buttonText?: string
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const ShopifyRecentlyViewed: React.FC<ShopifyRecentlyViewedProps> = (props) => {
	
  const {
		layout = 'grid',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
	} = props || {}

	const { products } = useRecentlyViewed()

	return (
		<div className="w-full">
			{layout == 'grid' && (
				<ShopifyProducts
					products={products}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					buttonText={buttonText}
				/>
			)}
			{layout == 'carousel' && (
				<ShopifyProductCarousel
					products={products}
					enableBorder={enableBorder}
					buttonText={buttonText}
				/>
			)}
			{products?.length === 0 && (
				<Placeholder
					icon={'ShoppingCart'}
					title={'No recently viewed'}
					description={'You have no recently viewed products.'}
				/>
			)}
		</div>
	)
}

export default ShopifyRecentlyViewed
