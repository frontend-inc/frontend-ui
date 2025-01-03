'use client'

import React, { useEffect } from 'react'
import { useProducts } from 'frontend-shopify'
import { ShopifyProductCard } from '..'

export type ShopifyProductArrayProps = {
	handles: string[]
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProductArray: React.FC<ShopifyProductArrayProps> = (props) => {
	const {
		handles,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
	} = props || {}

	return (
		<div className="w-full gap-6 pb-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
			{handles?.map((handle) => {
				const { product, findProduct } = useProducts()
				useEffect(() => {
					if (handle) {
						findProduct(handle)
					}
				}, [handle])

				if (!product) return null
				return (
					<div key={product?.id} className="p-1">
						<ShopifyProductCard
							product={product}
							enableBorder={enableBorder}
							enableAddToCart={enableAddToCart}
							enableQuantity={enableQuantity}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ShopifyProductArray
