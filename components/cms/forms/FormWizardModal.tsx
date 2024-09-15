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
		<Box sx={sx.root}>
			<Modal fullScreen disablePadding open={open} handleClose={handleClose}>
				<FormWizard {...props} />
			</Modal>
		</Box>
	)
}

export default FormWizardModal

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
