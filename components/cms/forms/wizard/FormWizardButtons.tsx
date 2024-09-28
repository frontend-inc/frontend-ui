import React from 'react'
import { Button, Stack } from '@mui/material'
import { IconLoading, Icon } from '../../../../components'

type FormWizardButtonsProps = {
	loading?: boolean
	currentStep: number
	totalSteps: number
	buttonText: string
	handleNextStep: () => void
	handlePrevStep: () => void
	handleSubmit: () => void
}

const FormWizardButtons: React.FC<FormWizardButtonsProps> = (props) => {
	const {
		loading,
		buttonText,
		currentStep,
		totalSteps,
		handleNextStep,
		handlePrevStep,
		handleSubmit,
	} = props

	return (
		<Stack direction="row" spacing={1} sx={sx.buttons}>
			<Button
				size="large"
				variant="contained"
				color="secondary"
				sx={sx.prevButton}
				onClick={handlePrevStep}
				startIcon={<Icon name="ChevronLeft" color="secondary.contrastText" />}
			>
				Prev
			</Button>
			{currentStep != totalSteps ? (
				<Button
					sx={sx.button}
					size="large"
					variant="contained"
					onClick={handleNextStep}
					disabled={currentStep == totalSteps}
					endIcon={
						loading ? (
							<IconLoading loading />
						) : (
							<Icon name="ChevronRight" color="primary.contrastText" />
						)
					}
				>
					Next
				</Button>
			) : (
				<Button
					sx={sx.button}
					size="large"
					variant="contained"
					onClick={handleSubmit}
					disabled={currentStep != totalSteps}
					endIcon={loading && <IconLoading loading />}
				>
					{buttonText}
				</Button>
			)}
		</Stack>
	)
}

export default FormWizardButtons

const sx = {
	buttons: {
		width: '100%',
		justifyContent: 'center',
		py: 2,
		px: 2,
		position: 'fixed',
		bottom: 0,
		left: 0,
		borderTop: '2px solid',
		borderColor: 'divider',
		bgcolor: 'background.paper',
	},
	button: {
		width: {
			sm: '260px',
			xs: '100%',
		},
	},
	prevButton: {
		width: {
			sm: '260px',
			xs: '100%',
		},
		color: 'secondary.contrastText',
	},
}
