import React, { useContext, useState, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { AppContext } from '../../../context'
import SwipeableViews from 'react-swipeable-views'
import { CoverImage } from '../../../components'
import { useRouter } from 'next/router'
import { autoPlay } from 'react-swipeable-views-utils'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

type CoverImageCarouselProps = {
	url: string
	fields?: any
	editing?: boolean
	height?: number
	perPage?: number
	query?: any
	buttonText?: string
	navigateUrl: any
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableOverlay?: boolean
	enableGradient?: boolean
	enableBorder?: boolean
	bgcolor?: string
	opacity?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const CoverImageCarousel: React.FC<CoverImageCarouselProps> = (props) => {
	const router = useRouter()

	const {
		editing = false,
		url,
		navigateUrl,
		query: defaultQuery = {},
		perPage = 20,
		buttonText,
		enableOverlay = false,
		opacity = 0.5,
		enableGradient = false,
		autoPlay = false,
		height,
		bgcolor = '#000000',
		alignItems = 'center',
	} = props

	const { clientUrl } = useContext(AppContext)

	const [activeStep, setActiveStep] = useState(0)
	const [maxSteps, setMaxSteps] = useState(0)

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	const { findMany, resources } = useResource({
		url,
	})

	const handleClick = (item) => {
		if (!editing && clientUrl && navigateUrl && item?.handle) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	useEffect(() => {
		if (url && defaultQuery && perPage) {
			findMany({
				...defaultQuery,
				per_page: perPage,
			})
		}
	}, [url, defaultQuery, perPage])

	useEffect(() => {
		if (resources) {
			setMaxSteps(resources?.length)
		}
	}, [resources])

	const SwipeableComponent = autoPlay ? AutoPlaySwipeableViews : SwipeableViews

	return (
		<SwipeableComponent
			axis={'x'}
			index={activeStep}
			onChangeIndex={handleStepChange}
			enableMouseEvents
		>
			{resources?.map((coverImage, index) => (
				<CoverImage
					key={index}
					editing={editing}
					title={coverImage?.title}
					description={coverImage?.description}
					image={coverImage?.image?.url}
					height={height}
					buttonText={buttonText}
					enableOverlay={enableOverlay}
					enableGradient={enableGradient}
					opacity={opacity}
					handleClick={() => handleClick(coverImage)}
					bgcolor={bgcolor}
					alignItems={alignItems}
				/>
			))}
		</SwipeableComponent>
	)
}

export default CoverImageCarousel
