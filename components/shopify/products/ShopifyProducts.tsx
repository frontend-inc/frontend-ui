'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { ShopifyProductType } from 'frontend-shopify'
import { BlurFade } from '../../../components'

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
		<div className='w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-1'>
			{products?.map((product, idx) => (
        <BlurFade delay={0.25 + idx * 0.05} inView key={product?.id}>
          <div className="p-1" key={product?.id}>
            <ShopifyProductCard
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
