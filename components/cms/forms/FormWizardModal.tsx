import React from 'react'
import { Box } from '@mui/material'
import FormWizard from './FormWizard'
import { Modal } from '../..'
import { FormWizardProps } from './FormWizard'

export type FormWizardModalProps = FormWizardProps & {
	open: boolean
	handleClose: () => void
}

const FormWizardModal: React.FC<FormWizardModalProps> = (props) => {
	const { open, handleClose } = props || {}

	return (
		<Modal fullScreen disablePadding open={open} handleClose={handleClose}>
			<FormWizard {...props} />
		</Modal>
	)
}

export default FormWizardModal
