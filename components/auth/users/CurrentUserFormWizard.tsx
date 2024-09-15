import React, { useContext, useEffect, useState } from 'react'
import { useApp } from '../../../hooks'
import { Button, Box } from '@mui/material'
import FormWizardProgress from '../../cms/forms/wizard/FormWizardProgress'
import FormWizardField from '../../cms/forms/wizard/FormWizardField'
import FormWizardButtons from '../../cms/forms/wizard/FormWizardButtons'
import { Modal } from '../..'
import { useRouter } from 'next/router'
import { useAuth } from 'frontend-js'

export type CurrentUserFormWizardProps = {
	handle: string
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

const CurrentUserFormWizard: React.FC<CurrentUserFormWizardProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const { fields = [], buttonText = 'Update Profile', href } = props

	const {
		user,
		setUser,
		currentUser,
		updateMe,
		handleChange,
		fetchMe,
		deleteAvatar,
	} = useAuth()

	const [submitted, setSubmitted] = useState(false)

	const [currentField, setCurrentField] = useState()
	const [currentStep, setCurrentStep] = useState(0)
	const [totalSteps, setTotalSteps] = useState(0)
	const [fadeIn, setFadeIn] = useState(false)
	const [open, setOpen] = useState(false)

	const handleStartClick = () => {
		setCurrentStep(0)
		setFadeIn(true)
		setOpen(true)
	}

	const handleResetForm = () => {
		setUser(currentUser)
		setSubmitted(false)
		setCurrentStep(0)
		setOpen(false)
	}

	const handleSuccess = () => {
		if (href) {
			router.push(`${clientUrl}${href}`)
		} else {
			handleResetForm()
		}
	}

	const handleRemove = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		try {
			let resp = await updateMe(user)
			if (resp?.id) {
				setSubmitted(true)
				setOpen(false)
				if (handleSuccess) {
					handleSuccess()
				}
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
			setTotalSteps(fields.length - 1)
		}
	}, [fields])

	useEffect(() => {
		if (fields) {
			setCurrentField(fields[currentStep])
		}
	}, [fields, currentStep])

	useEffect(() => {
		if (currentUser?.id) {
			setUser(currentUser)
		}
	}, [currentUser])

	return (
		<Box sx={sx.root}>
			<Button
				onClick={handleStartClick}
				variant="contained"
				color="primary"
				size="large"
				sx={sx.button}
			>
				{buttonText}
			</Button>
			<Modal
				fullScreen
				disablePadding
				open={open}
				handleClose={() => setOpen(false)}
			>
				<FormWizardProgress currentStep={currentStep} totalSteps={totalSteps} />
				<Box sx={sx.formContainer}>
					<Box sx={sx.form}>
						{currentField && (
							<FormWizardField
								fadeIn={fadeIn}
								field={currentField}
								handleChange={handleChange}
								handleRemove={handleRemove}
								resource={user}
								setResource={setUser}
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
			</Modal>
		</Box>
	)
}

export default CurrentUserFormWizard

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
	button: {},
}
