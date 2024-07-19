import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { Box } from '@mui/material'
import FormWizardProgress from './wizard/FormWizardProgress'
import FormCard from './wizard/FormCard'
import FormWizardField from './wizard/FormWizardField'
import FormWizardButtons from './wizard/FormWizardButtons'
import { Modal } from '../../../components'
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
		removeAttachment,
    handleChange
	} = useResource({
		url,
		name: 'document',
	})

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
		setResource({})
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
        setOpen(false)
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
			setTotalSteps(fields.length)
		}
	}, [fields])

	useEffect(() => {
		if (fields) {
			setCurrentField(fields[currentStep])
		}
	}, [fields, currentStep])

	useEffect(() => {
		if (_resource?.id) {
			setResource(_resource)
		} else if (handle && url) {
			findOne(handle)
		}
	}, [_resource, handle, url])

	return (
		<Box sx={sx.root}>
				{!submitted ? (
          <FormCard
            title={startTitle}
            description={startDescription}
            image={startImage}
            buttonText={startButtonText}
            handleClick={handleStartClick}
          />
        ):(
          <FormCard
						title={endTitle}
						description={endDescription}
						image={endImage}
						buttonText={endButtonText}
						handleClick={handleSuccess}
					/>
        )}						
        <Modal 
          fullScreen
          disablePadding
          open={ open }
          handleClose={() => setOpen(false)}
        >
          <FormWizardProgress 
            currentStep={currentStep} 
            totalSteps={totalSteps} 
          />
          <Box sx={ sx.formContainer }>
          <Box sx={ sx.form }>
            { currentField && (
              <FormWizardField
                fadeIn={fadeIn}
                field={currentField}
                handleChange={handleChange}
                handleRemove={handleRemove}
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
        </Modal>
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
	button: {
		mt: 2,
	},
	title: {
		textAlign: 'center',
		width: '100%',
	},
}
