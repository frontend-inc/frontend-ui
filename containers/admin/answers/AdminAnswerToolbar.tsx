'use client'

import React from 'react'
import { ResourceToolbarModal, AlertButton } from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminAnswerToolbar = (props) => {
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
			<div className="flex flex-row space-x-1">
				<AlertButton variant="secondary" onClick={handleDelete}>
					Delete
				</AlertButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminAnswerToolbar
