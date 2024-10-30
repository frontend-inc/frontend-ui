'use client'

import React from 'react'
import { useSegment } from '../../../hooks/addons'
import { ShopifyProductCard } from '..'
import { useRouter, useParams } from 'next/navigation'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp } from '../../../hooks'
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
	enableArrows?: boolean
	enableDots?: boolean
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

	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
    console.log("Product clicked", product)
	}

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
                  handleClick={() => handleClick(product)}
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
