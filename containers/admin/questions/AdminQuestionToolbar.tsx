import React from 'react'
import { ResourceToolbarModal, SecondaryButton } from '../../../components'
import { Stack } from '@mui/material'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminQuestionToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const { deleteMany } = useResource({
		url: `${apiUrl}/questions`,
		name: 'question',
	})

	const handleDelete = async () => {
		await deleteMany(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<Stack direction="row" spacing={1}>
				<SecondaryButton alert onClick={handleDelete}>
					Delete
				</SecondaryButton>
			</Stack>
		</ResourceToolbarModal>
	)
}

export default AdminQuestionToolbar
