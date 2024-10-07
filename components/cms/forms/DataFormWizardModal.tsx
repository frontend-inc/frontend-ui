import React, { useState, useEffect } from 'react'
import { Container, FormCard, FormWizardModal } from '../..'
import { Box } from '@mui/material'
import { useForms, useContacts } from '../../../hooks'
import { HeadingProps } from '../../../types'

export type DataFormWizardProps = HeadingProps & {
	formId: number
	handleSuccess?: (resource: any) => void
}

const DataFormWizard: React.FC<DataFormWizardProps> = (props) => {
	const [open, setOpen] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const { formId } = props || {}

	const { loading, form, findForm } = useForms()

	const {
		loading: responseLoading,
		contact,
		setContact,
		handleChange,
		updateContact,
		removeAttachment,
		addAttachment,
		submitForm,
	} = useContacts({
		formId,
	})

	const handleSuccess = () => {
		setOpen(false)
		setSubmitted(true)
	}

	const handleSubmit = async () => {
		let resp
		if (contact?.id) {
			resp = await updateContact({
				...contact,
				form_id: form?.id,
			})
		} else {
			resp = await submitForm(contact)
		}
		if (resp?.id) {
			handleSuccess()
			setOpen(false)
			setSubmitted(true)
		}
	}

	const handleRemove = (name: string) => {
		removeAttachment(contact?.id, name)
	}

	const handleAddAttachment = (name: string, attachmentId: number) => {
		addAttachment(contact?.id, name, attachmentId)
	}

	const handleResetForm = () => {
		setContact({})
		setOpen(false)
		setSubmitted(false)
	}

	useEffect(() => {
		if (formId) {
			findForm(formId)
		}
	}, [formId])

	return (
		<Container maxWidth="md">
			<Box sx={sx.root}>
				{!submitted ? (
					<FormCard
						image={form?.image?.url}
						title={form?.title}
						description={form?.description}
						buttonText={form?.button_text || 'Get Started'}
						handleClick={() => setOpen(true)}
					/>
				) : (
					<FormCard
						checkMark
						title={form?.end_title}
						description={form?.end_description}
						buttonText={form?.end_button_text}
						handleClick={handleResetForm}
					/>
				)}
				<FormWizardModal
					open={open}
					handleClose={() => setOpen(false)}
					loading={loading || responseLoading}
					resource={contact}
					setResource={setContact}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					fields={form?.questions}
					handleRemove={handleRemove}
					handleRemoveAttachment={handleRemove}
					handleAddAttachment={handleAddAttachment}
				/>
			</Box>
		</Container>
	)
}

export default DataFormWizard

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		bgcolor: 'primary.main',
	},
}
