import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import FormWizardProgress from './wizard/FormWizardProgress'
import FormWizardField from './wizard/FormWizardField'
import FormWizardButtons from './wizard/FormWizardButtons'
import { SyntheticEventType } from '../../../types'

export type FormWizardProps = {
	loading?: boolean
	errors?: any
	resource?: any
	setResource: (resource: any) => void
	handleChange: (ev: SyntheticEventType) => void
	handleSubmit: () => void
	handleRemove: (field: any) => void
	handleAddAttachment: (field: string, attachmentId: number) => void
	handleRemoveAttachment: (field: string) => void
	buttonText?: string
	fields: any[]
	handleSuccess?: () => void
}

const FormWizard: React.FC<FormWizardProps> = (props) => {
	const {
		resource,
		setResource,
		fields = [],
		handleChange,
		handleSubmit,
		handleRemove,
		buttonText = 'Submit',
		handleAddAttachment,
		handleRemoveAttachment,
	} = props

	const [currentField, setCurrentField] = useState()
	const [currentStep, setCurrentStep] = useState(1)
	const [totalSteps, setTotalSteps] = useState(0)
	const [fadeIn, setFadeIn] = useState(true)

	const handleNextStep = () => {
		setFadeIn(false)
		let nextStep = currentStep + 1
		if (nextStep > totalSteps) {
			return
		}
		setTimeout(() => {
			setCurrentStep(nextStep)
			setFadeIn(true)
		}, 500)
	}

	const handlePrevStep = () => {
		const nextStep = currentStep - 1
		if (nextStep < 1) {
			return
		}
		setCurrentStep(nextStep)
	}

	useEffect(() => {
		if (fields) {
			setTotalSteps(fields.length)
		}
	}, [fields])

	useEffect(() => {
		if (fields) {
			setCurrentField(fields[currentStep - 1])
		}
	}, [fields, currentStep])

	return (
		<Box sx={sx.root}>
			<FormWizardProgress currentStep={currentStep} totalSteps={totalSteps} />
			<Box sx={sx.formContainer}>
				<Box sx={sx.form}>
					{currentField && (
						<FormWizardField
							fadeIn={fadeIn}
							field={currentField}
							handleChange={handleChange}
							handleRemove={handleRemove}
							handleAddAttachment={handleAddAttachment}
							handleRemoveAttachment={handleRemoveAttachment}
							resource={resource}
							setResource={setResource}
						/>
					)}
					<FormWizardButtons
						currentStep={currentStep}
						totalSteps={totalSteps}
						handleNextStep={handleNextStep}
						handlePrevStep={handlePrevStep}
						handleSubmit={handleSubmit}
						buttonText={buttonText}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default FormWizard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 'calc(100vh - 200px)',
	},
	form: {
		px: 2,
		py: 4,
		width: '100%',
		maxWidth: '600px',
	},
}
