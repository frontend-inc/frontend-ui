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
        sx={ sx.prevButton }
				onClick={handlePrevStep}
				startIcon={<Icon name="ChevronLeft" color="secondary.contrastText" />}
			>
				Prev
			</Button>
			{currentStep != totalSteps ? (
				<Button
					size="large"
					variant="contained"
					onClick={handleNextStep}
					disabled={currentStep == totalSteps}
					endIcon={
            loading ? <IconLoading loading /> :
            <Icon name="ChevronRight" color="primary.contrastText" />
          }
				>
					Next
				</Button>
			) : (
				<Button
					size="large"
					variant="contained"
					onClick={handleSubmit}
					disabled={currentStep != totalSteps}
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
		justifyContent: 'flex-end',
		py: 4,
	},
  prevButton: {
    color: 'secondary.contrastText',
  }
}
