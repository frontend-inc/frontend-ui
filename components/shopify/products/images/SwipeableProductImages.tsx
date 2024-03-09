import React, { useState } from 'react'
import { Product } from 'frontend-shopify'
import SwipeableViews from 'react-swipeable-views'
import { TouchableOpacity } from '../../../../components'
import { Box, Stack, MobileStepper } from '@mui/material'
import {
	PRODUCT_CARD_HEIGHT,
	PRODUCT_CARD_WIDTH,
} from '../../../../constants/index'
import { shopifyResizeImage } from 'frontend-shopify'

type SwipeableProductImagesProps = {
	product: Product
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
}

const SwipeableProductImages: React.FC<SwipeableProductImagesProps> = (
	props
) => {
	const {
		product,
		height = PRODUCT_CARD_HEIGHT,
		width = PRODUCT_CARD_WIDTH,
		handleClick,
		objectFit = 'cover',
		responsiveHeight = false,
	} = props

	const [activeStep, setActiveStep] = useState(0)
	// @ts-ignore
	const maxSteps = product?.images?.edges.length

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	return (
		<Stack
			sx={{
				...sx.root,
				height: !responsiveHeight && `${height}px`,
				minHeight: `${height}px`,
				minWidth: !responsiveHeight && `${width}px`,
			}}
			direction="column"
		>
			<SwipeableViews
				axis={'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{
					// @ts-ignore
					product?.images?.edges.map(({ node: image }) => (
						<Box
							key={image.id}
							sx={{
								...sx.image,
							}}
						>
							<TouchableOpacity key={image.id} handleClick={handleClick}>
								<img
									src={shopifyResizeImage(image?.url, {
										width: width * 2,
										height: height * 2,
									})}
									alt={product?.title}
									width={width}
									height={height}
									style={{
										objectFit,
									}}
								/>
							</TouchableOpacity>
						</Box>
					))
				}
			</SwipeableViews>
			{maxSteps > 1 && (
				<MobileStepper
					sx={sx.stepper}
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					backButton={<Box />}
					nextButton={<Box />}
				/>
			)}
		</Stack>
	)
}

export default SwipeableProductImages

const sx = {
	root: {
		width: '100%',
		position: 'relative',
	},
	stepper: {
		position: 'absolute',
		bottom: 5,
		bgcolor: 'transparent',
		width: '100%',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		overflow: 'hidden',
		'&::webkit-scrollbar': {
			display: 'none',
		},
	},
}
