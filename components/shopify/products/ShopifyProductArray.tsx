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
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full">
			{handles?.map((handle) => {
				const { product, findProduct } = useProducts()
				useEffect(() => {
          if(handle){          
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
