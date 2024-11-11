'use client'

import React from 'react'
import { ResourceToolbarModal, AlertButton } from '../../../components'
import { useAdminQuestions } from '../../../hooks'

type AdminQuestionToolbarProps = {
  formId: string
  open: boolean
  handleClose: () => void
  selectedIds: string[]
  handleReload: () => void  
}

const AdminQuestionToolbar: React.FC<AdminQuestionToolbarProps> = (props) => {
	
	const { formId, open, handleClose, selectedIds, handleReload } = props || {}

	const { deleteQuestions } = useAdminQuestions({
    formId
  })
  

	const handleDelete = async () => {
		await deleteQuestions(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div>
				<AlertButton variant="secondary" onClick={handleDelete}>
					Delete
				</AlertButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminQuestionToolbar
