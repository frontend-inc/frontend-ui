'use client'

import React from 'react'
import { ShopifyProductItem } from '..'
import { ShopifyProductType } from 'frontend-shopify'
import { BlurFade } from '../../../components'

type ShopifyProductsProps = {
	loading?: boolean
	products: ShopifyProductType[]
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {
	const {
		products,
		enableBorder = false,
		enableAddToCart,
		enableQuantity,
	} = props || {}

	return (
		<div className="w-full gap-6 pb-1 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
			{products?.map((product, idx) => (
				<BlurFade delay={0.25 + idx * 0.05} inView key={product?.id}>
					<div className="p-1" key={product?.id}>
						<ShopifyProductItem
							product={product}
							enableBorder={enableBorder}
							enableAddToCart={enableAddToCart}
							enableQuantity={enableQuantity}
						/>
					</div>
				</BlurFade>
			))}
		</div>
	)
}

export default ShopifyProducts
