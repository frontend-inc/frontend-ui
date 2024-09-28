import React from 'react'
import {
	ResourceToolbarModal,
	PrimaryButton,
	SecondaryButton,
} from '../../../components'
import { Stack } from '@mui/material'
import { useResource } from 'frontend-js'

type AdminFormQuestionToolbarProps = {
	open: boolean
	resource: any
	url: string
	handleClose: () => void
	selectedIds: string[]
	handleReload: () => void
}

const AdminFormQuestionToolbar: React.FC<AdminFormQuestionToolbarProps> = (
	props
) => {
	const { open, url, handleClose, selectedIds, handleReload } = props || {}

	const { deleteMany } = useResource({
		url: url,
		name: 'form_question',
	})

	const handleDelete = async () => {
		await deleteMany(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<Stack direction="row" spacing={1}>
				<SecondaryButton onClick={handleDelete}>Delete</SecondaryButton>
			</Stack>
		</ResourceToolbarModal>
	)
}

export default AdminFormQuestionToolbar
