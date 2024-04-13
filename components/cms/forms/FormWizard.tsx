import React, { useEffect, useState } from 'react'
import { useResource } from 'frontend-js'
import { Box } from '@mui/material'
import FormWizardProgress from './wizard/FormWizardProgress'
import FormCard from './wizard/FormCard'
import FormWizardField from './wizard/FormWizardField'
import FormWizardButtons from './wizard/FormWizardButtons'

export type FormWizardProps = {
	handle: string
	py?: number
	url: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	children?: React.ReactElement[]
	title: string
	description: string
	buttonText?: string
	image: string
	endTitle: string
	endDescription: string
	endImage: string
	endButtonText: string
}

const FormWizard: React.FC<FormWizardProps> = (props) => {
	const {
		py = 4,
		handle,
		fields,
		url,
		title,
		description,
		image,
		buttonText = 'Start',
		endTitle,
		endDescription,
		endImage,
		endButtonText,
	} = props

	const [submitted, setSubmitted] = useState(false)

	const {
		loading,
		findOne,
		resource,
		setResource,
		update,
		create,
		handleChange,
		removeAttachment,
	} = useResource({
		name: 'document',
		url,
	})

	const [currentField, setCurrentField] = useState()
	const [currentStep, setCurrentStep] = useState(0)
	const [totalSteps, setTotalSteps] = useState(0)
	const [fadeIn, setFadeIn] = useState(false)

	const handleStartClick = () => {
		setCurrentStep(1)
		setFadeIn(true)
	}

	const handleResetForm = () => {
		setResource({})
		setSubmitted(false)
		setCurrentStep(0)
	}

	const handleRemove = async (name) => {
		await removeAttachment(resource?.id, name)
	}

	const handleSubmit = async () => {
		try {
			let resp
			if (resource?.id) {
				resp = await update(resource)
			} else {
				resp = await create(resource)
			}
			if (resp?.id) {
				setSubmitted(true)
			}
		} catch (err) {
			console.log('Error', err)
		}
	}

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
		if (nextStep < 0) {
			return
		}
		setCurrentStep(nextStep)
	}

	useEffect(() => {
		if (handle) {
			findOne(handle)
		}
	}, [handle])

	useEffect(() => {
		if (fields) {
			setTotalSteps(fields.length) // End card adds 1
		}
	}, [fields])

	useEffect(() => {
		if (fields && currentStep > 0) {
			setCurrentField(fields[currentStep - 1])
		}
	}, [fields, currentStep])

	return (
		<Box sx={sx.root}>
			{currentStep > 0 && (
				<FormWizardProgress currentStep={currentStep} totalSteps={totalSteps} />
			)}
			<Box
				sx={{
					...sx.form,
					py,
				}}
			>
				{!submitted ? (
					<>
						{currentStep == 0 && (
							<FormCard
								title={title}
								description={description}
								image={image}
								buttonText={buttonText}
								handleClick={handleStartClick}
							/>
						)}
						{currentStep > 0 && (
							<>
								<FormWizardField
									fadeIn={fadeIn}
									field={currentField}
									handleChange={handleChange}
									handleRemove={handleRemove}
									resource={resource}
									setResource={setResource}
								/>
								<FormWizardButtons
									currentStep={currentStep}
									totalSteps={totalSteps}
									handleNextStep={handleNextStep}
									handlePrevStep={handlePrevStep}
									handleSubmit={handleSubmit}
									buttonText={endButtonText}
								/>
							</>
						)}
					</>
				) : (
					<FormCard
						title={endTitle}
						description={endDescription}
						image={endImage}
						buttonText={'Done'}
						handleClick={handleResetForm}
					/>
				)}
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
	form: {
		px: 2,
		width: '100%',
		maxWidth: '600px',
	},
	button: {
		mt: 2,
	},
	title: {
		textAlign: 'center',
		width: '100%',
	},
}
