'use client'

import React from 'react'
import { ResourceToolbarModal, Button } from '../../../components'
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
			<Button variant="secondary" onClick={handleDelete}>
				Delete
			</Button>
		</ResourceToolbarModal>
	)
}

export default AdminFormQuestionToolbar
