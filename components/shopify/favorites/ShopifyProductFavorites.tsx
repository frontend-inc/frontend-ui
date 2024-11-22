'use client'

import React from 'react'
import { Alert } from '../..'
import { ShopifyProductArray } from '..'
import { UserType } from 'frontend-js'

export type ShopifyProductFavoritesProps = {
	user: UserType
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProductFavorites: React.FC<ShopifyProductFavoritesProps> = (
	props
) => {
	const {
		user,
		enableBorder = false,
		enableAddToCart,
		enableQuantity,
	} = props || {}

	const { shopify_favorites: favorites } = user || {}

	return (
		<div className="w-full">
			<ShopifyProductArray
				handles={favorites || []}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
			/>
			{favorites?.length === 0 && (
				<Alert
					icon="ri-heart-2-fill"
					title="No favorites"
					description="You have no favorites yet."
				/>
			)}
		</div>
	)
}

export default ShopifyProductFavorites
