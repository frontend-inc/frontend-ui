import React, { useContext, useState } from 'react'
import { AppContext } from '../../../context'
import SwipeableViews from 'react-swipeable-views'
import { CoverImage, Icon } from '../../../components'
import { useRouter } from 'next/router'
import { autoPlay } from 'react-swipeable-views-utils'
import { Box, IconButton } from '@mui/material'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

type CoverImageCarouselProps = {
  items: {
    title?: string
    description?: string
    image?: string
    buttonText?: string
    url?: string
  }[]
	editing?: boolean
	autoPlay?: boolean
	arrows?: boolean
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
		autoPlay = false,
		overlayColor = '#000000',
		alignItems = 'center',
	} = props

	const { clientUrl } = useContext(AppContext)

	const [activeStep, setActiveStep] = useState(0)

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	const handleClick = (item) => {
		if (!editing && item?.url) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${item?.url}`)
		}
	}

  const handlePrev = () => {
    if(activeStep === 0) {
      setActiveStep(items.length - 1)
    }else{
      setActiveStep((prevActiveStep) => prevActiveStep - 1)    
    }    
  }

  const handleNext = () => {
    if(activeStep === items.length - 1) {
      setActiveStep(0)
    }else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

	const SwipeableComponent = autoPlay ? AutoPlaySwipeableViews : SwipeableViews

	return (
    <Box sx={ sx.root }>
      <SwipeableComponent
        axis={'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
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
      </SwipeableComponent>
      { enableArrows && (
        <Box sx={ sx.actions }>
          <IconButton 
            onClick={handlePrev}
          >
            <Icon name="ChevronLeft" size={32} />
          </IconButton>
          <IconButton 
            onClick={handleNext}
          >
            <Icon name="ChevronRight"  size={32} />
          </IconButton>
        </Box>
      )}
    </Box>
	)
}

export default CoverImageCarousel

const sx = {
  root: {
    width: '100%',
    position: 'relative'
  },
  actions: {  
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1  
  }
}
