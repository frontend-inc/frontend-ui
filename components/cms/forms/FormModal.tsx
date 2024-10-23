'use client'

import React from 'react'
import { Form, Sheet } from '../../../components'
import { FormProps } from './Form'

export type FormModalProps = FormProps & {
	title?: string
	open: boolean
	handleClose: () => void
}

const FormModal: React.FC<FormModalProps> = (props) => {
	const { title, open, handleClose, ...rest } = props

	return (
		<Sheet open={open} handleClose={handleClose} title={title}>
			<Form {...rest} />
		</Sheet>
	)
}

export default FormModal
