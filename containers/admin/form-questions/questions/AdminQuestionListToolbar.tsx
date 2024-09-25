import React from 'react'
import { PrimaryButton, ResourceToolbarModal } from '../../../../components'
import { Collapse, Stack } from '@mui/material'
import { useFormBuilder } from '../../../../hooks'

const AdminProductToolbar = (props) => {
	const { formId, handleSuccess } = props || {}

	const { open, handleClose, selectedIds } = props || {}

	const { addQuestions } = useFormBuilder()

	const handleAddQuestions = async () => {
		await addQuestions(formId, selectedIds)
		handleSuccess()
		handleClose()
	}

	return (
    <ResourceToolbarModal open={open} handleClose={handleClose}>		
			<Stack direction="row" spacing={1}>
				<PrimaryButton fullWidth onClick={handleAddQuestions} icon="Plus">
					Add Questions
				</PrimaryButton>
			</Stack>
		</ResourceToolbarModal>
	)
}

export default AdminProductToolbar
