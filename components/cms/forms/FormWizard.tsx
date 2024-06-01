import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context'
import { useDocuments } from 'frontend-js'
import { Box } from '@mui/material'
import FormWizardProgress from './wizard/FormWizardProgress'
import FormCard from './wizard/FormCard'
import FormWizardField from './wizard/FormWizardField'
import FormWizardButtons from './wizard/FormWizardButtons'
import { useRouter } from 'next/router'

export type FormWizardProps = {
	handle: string
	resource?: any
	py?: number
	url: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	startTitle: string
	startDescription: string
	startImage: string
	startButtonText?: string
	buttonText?: string
	image: string
	endTitle: string
	endDescription: string
	endImage: string
	endButtonText: string
	href?: string
}

const FormWizard: React.FC<FormWizardProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		py = 4,
		handle,
		resource: _resource,
		fields,
		url,
		startTitle,
		startDescription,
		startImage,
		startButtonText = 'Start',
		buttonText = 'Submit',
		endTitle,
		endDescription,
		endImage,
		endButtonText,
		href,
	} = props

	const [submitted, setSubmitted] = useState(false)

	const {
		loading,
		findOne,
		resource,
		setResource,
		update,
		create,
		handleDataChange,
		removeAttachment,
		flattenDocument,
	} = useDocuments({
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

	const handleSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		} else {
			handleResetForm()
		}
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
		if (fields) {
			setTotalSteps(fields.length) // End card adds 1
		}
	}, [fields])

	useEffect(() => {
		if (fields && currentStep > 0) {
			setCurrentField(fields[currentStep - 1])
		}
	}, [fields, currentStep])

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		} else if (handle && contentType) {
			findOne(handle)
		}
	}, [_resource, handle, contentType])

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
								title={startTitle}
								description={startDescription}
								image={startImage}
								buttonText={startButtonText}
								handleClick={handleStartClick}
							/>
						)}
						{currentStep > 0 && (
							<>
								<FormWizardField
									fadeIn={fadeIn}
									field={currentField}
									handleChange={handleDataChange}
									handleRemove={handleRemove}
									resource={flattenDocument(resource)}
									setResource={setResource}
								/>
								<FormWizardButtons
									currentStep={currentStep}
									totalSteps={totalSteps}
									handleNextStep={handleNextStep}
									handlePrevStep={handlePrevStep}
									handleSubmit={handleSubmit}
									buttonText={buttonText}
								/>
							</>
						)}
					</>
				) : (
					<FormCard
						title={endTitle}
						description={endDescription}
						image={endImage}
						buttonText={endButtonText}
						handleClick={handleSuccess}
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
