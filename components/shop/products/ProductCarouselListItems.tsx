'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/navigation'
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
	enableArrows?: boolean
	enableDots?: boolean
}

const ProductCarouselListItems: React.FC<ProductCarouselListItemsProps> = (
	props
) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		buttons,
		href,
		displayFields,
		enableGradient = false,
		enableOverlay = false,
		enableRatings = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { setOpenShow, loading, resources, setResource } = useResourceContext()

	const handleClick = (resource) => {
		if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
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
				{resources?.map((resource, index) => (
					<CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
            <div className='p-1'>        
              <ProductListItem
                buttons={buttons}
                resource={resource}
                displayFields={displayFields}
                handleClick={() => handleClick(resource)}
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
