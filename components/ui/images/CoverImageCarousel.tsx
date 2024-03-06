import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import {Swipeable, CoverImage } from '../../../components'
import { useRouter } from 'next/router'

type CoverImageCarouselProps = {
  items: {
    title?: string
    description?: string
    image?: string
    buttonText?: string
    url?: string
  }[]
	editing?: boolean
	enableAutoPlay?: boolean
	showDots?: boolean
	enableOverlay?: boolean
	enableGradient?: boolean
	enableBorder?: boolean
  enableArrows?: boolean
	overlayColor?: string
	opacity?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const CoverImageCarousel: React.FC<CoverImageCarouselProps> = (props) => {
	const router = useRouter()

	const {
		editing = false,
    items=[],
		enableOverlay = false,
		opacity = 0.5,
		enableGradient = false,
    enableArrows = false,
		enableAutoPlay = false,
		overlayColor = '#000000',
		alignItems = 'center',
	} = props

	const { clientUrl } = useContext(AppContext)

	const handleClick = (item) => {
		if (!editing && item?.url) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${item?.url}`)
		}
	}

	return (
    <Swipeable        
      enableAutoPlay={enableAutoPlay}
      enableArrows={enableArrows}        
    >
      {items?.map((item, index) => (
        <CoverImage
          key={index}
          editing={editing}
          title={item?.title}
          description={item?.description}
          image={item?.image}					
          buttonText={item?.buttonText}
          enableOverlay={enableOverlay}
          enableGradient={enableGradient}
          opacity={opacity}
          handleClick={() => handleClick(item)}
          overlayColor={overlayColor}
          alignItems={alignItems}
        />
      ))}
    </Swipeable>      
	)
}

export default CoverImageCarousel
