'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { ShopifyProductType } from 'frontend-shopify'
import { cn } from 'frontend-shadcn'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, 
} from 'frontend-shadcn'

type ShopifyProductCarouselProps = {
	loading?: boolean
	products: ShopifyProductType[]
	buttonText?: string
	enableAutoPlay?: boolean
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
}

const ShopifyProductCarousel: React.FC<ShopifyProductCarouselProps> = (
	props
) => {
	const {
    loading,
		products,
		buttonText = 'Add to cart',
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity = false,
	} = props

	return (
		<div
			className={cn(
				'w-full',
				loading && 'opacity-50'
			)}
		>
			<Carousel>
        <CarouselContent>
			    {products?.map((product, index) => (
				    <CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
              <div className='p-1'>              
                <ShopifyProductCard
                  product={product}
                  buttonText={buttonText}
                  enableBorder={enableBorder}
                  enableAddToCart={enableAddToCart}
                  enableQuickShop={enableQuickShop}
                  enableQuantity={enableQuantity}
                />
              </div>
            </CarouselItem>
			  ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
	  </Carousel>
  </div>
	)
}

export default ShopifyProductCarousel
