'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/navigation'
import DocumentListItem from './DocumentListItem'
import { DocumentListItemsProps } from './DocumentListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from 'frontend-shadcn'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'

export type DocumentCarouselListItemsProps = DocumentListItemsProps & {
	enableAutoPlay?: boolean
}

const DocumentCarouselListItems: React.FC<DocumentCarouselListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		buttons,
		href,
		metafields,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		slots = {
			item: {},
			image: {},
		},
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
		<div className={cn('w-full', loading && 'opacity-50')}>
			<Carousel>
				<CarouselContent>
					{resources?.map((resource, index) => (
						<CarouselItem className="sm:basis-1/2 lg:basis-1/3" key={index}>
							<div className="p-1">
								<DocumentListItem
									buttons={buttons}
									style="card"
									resource={resource}
									metafields={metafields}
									handleClick={() => handleClick(resource)}
									enableGradient={enableGradient}
									enableOverlay={enableOverlay}
									enableFavorites={enableFavorites}
									enableLikes={enableLikes}
									{...slots.item}
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

export default DocumentCarouselListItems