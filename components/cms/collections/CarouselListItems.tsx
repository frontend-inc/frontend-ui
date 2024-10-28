'use client'

import React from 'react'
import { Carousel } from '../..'
import { useApp } from '../../../hooks'
import { useRouter, useParams } from 'next/navigation'
import CollectionListItem from './CollectionListItem'
import { CollectionListItemsProps } from '../collections/CollectionListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from 'frontend-shadcn'

export type CarouselListItemsProps = CollectionListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const CarouselListItems: React.FC<CarouselListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		buttons,
		href,
		displayFields,
		enableAutoPlay = true,
		enableArrows = false,
		enableDots = false,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
    slots={
      item: {},
      image: {},
    }
	} = props

	const { setOpenShow, loading, resources, setResource } = useResourceContext()

	const handleClick = (resource) => {
    if (clientUrl && href && resource?.handle) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      router.push(`${clientUrl}${href}/${resource?.handle}`)
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
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<div
						className={cn(
              'p-1 w-full', 
              enableArrows && 'pt-5', 
              enableDots && 'pb-4'
            )}
						key={index}
					>
						<CollectionListItem
							buttons={buttons}
							style="card"
							resource={resource}
							displayFields={displayFields}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							enableFavorites={enableFavorites}
							enableLikes={enableLikes}
              { ...slots.item }
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CarouselListItems
