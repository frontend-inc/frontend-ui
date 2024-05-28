import React, { useState } from 'react'
import { ProductType } from 'frontend-shopify'
import SwipeableViews from 'react-swipeable-views'
import { Image, TouchableOpacity } from '../../../../components'
import { Box, Stack, MobileStepper } from '@mui/material'
import { shopifyResizeImage } from 'frontend-shopify'

type SwipeableProductImagesProps = {
	product: ProductType
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
	disableBorderRadius?: boolean
}

const SwipeableProductImages: React.FC<SwipeableProductImagesProps> = (
	props
) => {
	const {
		product,
		height = 320,
		handleClick,
		objectFit = 'cover',
		disableBorderRadius = false,
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
				height: !responsiveHeight ? `${height}px` : null,
				minHeight: `${height}px`,
				width: {
					sm: '100%',
					xs: '100%',
				},
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
								<Image
									src={shopifyResizeImage(image?.url, {
										width: 600,
										height: 600,
									})}
									alt={product?.title}
									height={height}
									objectFit={objectFit}
									disableBorderRadius={disableBorderRadius}
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
