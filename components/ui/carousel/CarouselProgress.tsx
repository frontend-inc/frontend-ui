import React, { useState } from 'react'
import { Box, LinearProgress, IconButton } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

type CarouselProgressProps = {
	children: React.ReactNode[]
}

const CarouselProgress: React.FC<CarouselProgressProps> = (props) => {
	const { children } = props
	const [currentStep, setCurrentStep] = useState(0)

	const handleNextStep = () => {
		let nextStep = currentStep + 1
		if (nextStep > children.length - 1) {
			nextStep = 0
		}
		setCurrentStep(nextStep)
	}

	const handlePrevStep = () => {
		let nextStep = currentStep - 1
		if (nextStep == 0) {
			nextStep = children.length - 1
		}
		setCurrentStep(nextStep)
	}

	return (
		<Box>
			<Box>{children[currentStep]}</Box>
			<Box sx={sx.controls}>
				<LinearProgress color="primary" variant="determinate" value={80} />
				<Box sx={sx.buttons}>
					<IconButton onClick={handlePrevStep}>
						<ChevronLeft />
					</IconButton>
					<IconButton onClick={handleNextStep}>
						<ChevronRight />
					</IconButton>
				</Box>
			</Box>
		</Box>
	)
}

export default CarouselProgress

const sx = {
	buttons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '20px',
	},
	controls: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
