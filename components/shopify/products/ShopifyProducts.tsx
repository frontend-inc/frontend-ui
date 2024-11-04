'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductsProps = {
	loading?: boolean
	products: ShopifyProductType[]	
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProducts: React.FC<ShopifyProductsProps> = ({
	products,
	enableBorder = false,
	enableAddToCart,
	enableQuantity,
}) => {

  return (
		<div className='w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 pb-1'>
			{products?.map((product) => (
				<div className="p-1" key={product?.id}>
					<ShopifyProductCard
						product={product}
						enableBorder={enableBorder}
						enableAddToCart={enableAddToCart}
						enableQuantity={enableQuantity}						
					/>
				</div>
			))}
		</div>
	)
}

export default ShopifyProducts
