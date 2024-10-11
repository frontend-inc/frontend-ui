import React from 'react'
import { PrimaryButton, ResourceToolbarModal } from '../../../../components'
import { useAdminForms } from '../../../../hooks'

const AdminProductToolbar = (props) => {
	const { formId, handleSuccess } = props || {}

	const { open, handleClose, selectedIds } = props || {}

	const { addQuestions } = useAdminForms()

	const handleAddQuestions = async () => {
		await addQuestions(formId, selectedIds)
		handleSuccess()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
      <PrimaryButton fullWidth onClick={handleAddQuestions} icon="Plus">
        Add Questions
      </PrimaryButton>
		</ResourceToolbarModal>
	)
}

export default AdminProductToolbar
