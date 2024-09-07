import React, { useEffect } from 'react'
import { useRecentlyViewed } from 'frontend-shopify'
import { ProductType } from 'frontend-shopify'

type ShopifyTrackRecentlyViewedProps = {
	product?: ProductType
}

const ShopifyTrackRecentlyViewed: React.FC<ShopifyTrackRecentlyViewedProps> = (props) => {
	const { product } = props

	const { viewProduct } = useRecentlyViewed()

	useEffect(() => {
		if (product?.handle) {
			viewProduct(product)
		}
	}, [product?.handle])

	return null
}

export default ShopifyTrackRecentlyViewed
