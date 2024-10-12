import React from 'react'
import { ResourceToolbarModal } from '../../../../components'
import { Button } from '../../../../shadcn/ui/button'
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
      <Button onClick={handleAddQuestions} icon="Plus">
        Add Questions
      </Button>
		</ResourceToolbarModal>
	)
}

export default AdminProductToolbar
