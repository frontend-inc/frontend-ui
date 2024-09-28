import React, { useState } from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import SwipeableViews from 'react-swipeable-views'
import { Image, TouchableOpacity } from '../../../../components'
import { Box, Stack, MobileStepper } from '@mui/material'
import { shopifyResizeImage } from 'frontend-shopify'

type SwipeableShopifyProductImagesProps = {
	product: ShopifyProductType
	height?: number
	width?: number
	handleClick?: () => void
	objectFit?: 'contain' | 'cover'
	responsiveHeight?: boolean
	disableBorderRadius?: boolean
}

const SwipeableShopifyProductImages: React.FC<
	SwipeableShopifyProductImagesProps
> = (props) => {
	const {
		product,
		height = 320,
		handleClick,
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

export default SwipeableShopifyProductImages

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
