'use client'

import React from 'react'
import { ShopifyProductCard } from '..'
import { ShopifyProductType } from 'frontend-shopify'
import { cn } from '@nextui-org/react'
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
	enableQuantity?: boolean
}

const ShopifyProductCarousel: React.FC<ShopifyProductCarouselProps> = (
	props
) => {
	const {
		loading,
		products,
		enableBorder = false,
		enableAddToCart,
		enableQuantity = false,
	} = props

	return (
		<div className={cn('w-full', loading && 'opacity-50')}>
			<Carousel>
				<CarouselContent>
					{products?.map((product, index) => (
						<CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
							<div className="p-1">
								<ShopifyProductCard
									product={product}
									enableBorder={enableBorder}
									enableAddToCart={enableAddToCart}
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
