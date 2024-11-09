'use client'

import React from 'react'
import ProductListItem from './ProductListItem'
import { ProductListItemsProps } from '../products/ProductListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from 'frontend-shadcn'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'

export type ProductCarouselListItemsProps = ProductListItemsProps & {
	enableAutoPlay?: boolean
}

const ProductCarouselListItems: React.FC<ProductCarouselListItemsProps> = (
	props
) => {
	const {
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableRatings = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { setOpenShow, loading, resources, setResource } = useResourceContext()

	const handleShowClick = (product: any) => {
		if (handleClick) {
			handleClick(product)
			return
		} else {
			setResource(product)
			setOpenShow(true)
		}
	}

	return (
		<div className={cn('w-full', loading && 'opacity-50')}>
			<Carousel>
				<CarouselContent>
					{resources?.map((resource, index) => (
						<CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
							<div className="p-1">
								<ProductListItem
									resource={resource}
									handleClick={() => handleShowClick(resource)}
									enableGradient={enableGradient}
									enableOverlay={enableOverlay}
									enableFavorites={enableFavorites}
									enableRatings={enableRatings}
									enableLikes={enableLikes}
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

export default ProductCarouselListItems
