'use client'

import React from 'react'
import FormWizard from './FormWizard'
import { Drawer } from '../..'
import { FormWizardProps } from './FormWizard'

export type FormWizardModalProps = FormWizardProps & {
	open: boolean
	handleClose: () => void
}

const FormWizardModal: React.FC<FormWizardModalProps> = (props) => {
	const { open, handleClose } = props || {}

	return (
		<Drawer 
      open={open} 
      handleClose={handleClose}
      maxWidth='xl'
    >
			<FormWizard {...props} />
		</Drawer>
	)
}

export default FormWizardModal
