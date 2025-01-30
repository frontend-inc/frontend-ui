'use client'

import React from 'react'
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
				return (
					<div key={handle} className="p-1">
						<ShopifyProductCard
							shopifyProduct={handle}
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
