'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductsProps = {
	loading?: boolean
	products: ShopifyProductType[]
	buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
}

const ShopifyProducts: React.FC<ShopifyProductsProps> = ({
	products,
	buttonText = 'Add to cart',
	enableBorder = false,
	enableAddToCart,
	enableQuickShop,
	enableQuantity,
}) => {

  return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-full">
			{products?.map((product) => (
				<div className="p-1" key={product?.id}>
					<ShopifyProductCard
						product={product}
						enableBorder={enableBorder}
						enableAddToCart={enableAddToCart}
						enableQuickShop={enableQuickShop}
						enableQuantity={enableQuantity}
						buttonText={buttonText}
					/>
				</div>
			))}
		</div>
	)
}

export default ShopifyProducts
