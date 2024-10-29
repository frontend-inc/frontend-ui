'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/navigation'
import CollectionListItem from './CollectionListItem'
import { CollectionListItemsProps } from '../collections/CollectionListItems'
import { useResourceContext } from 'frontend-js'
import { cn } from 'frontend-shadcn'
import { 
  AspectRatio,
  ScrollArea,
  ScrollBar 
} from 'frontend-shadcn'

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
      <ScrollArea 
        className={cn(
				  'w-full whitespace-nowrap pb-4',
				  loading && 'opacity-50'
			  )}
      >
        <div className="flex flex-row w-full">
          {resources?.map((resource, index) => (                      
              <div key={index} className="w-[280px] sm:w-[360px] p-2">
              <CollectionListItem
                buttons={buttons}
                style="card"
                resource={resource}
                displayFields={displayFields}
                handleClick={() => handleClick(resource)}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}
                enableFavori tes={enableFavorites}
                enableLikes={enableLikes}
                { ...slots.item }
              />            
            </div>
          ))}
        </div>
      <ScrollBar orientation="horizontal" />
		</ScrollArea>
	)
}

export default CarouselListItems
