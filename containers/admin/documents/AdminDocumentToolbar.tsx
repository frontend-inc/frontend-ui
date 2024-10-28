'use client'

import React from 'react'
import {
  Button,
	ResourceToolbarModal,
	AlertButton,
} from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminDocumentToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, collectionId, handleClose, selectedIds, handleReload } = props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: `${apiUrl}/${collectionId}`,
		name: 'document',
	})

	const handlePublish = async () => {
		await publish(selectedIds)
		handleReload()
		handleClose()
	}

	const handleUnpublish = async () => {
		await unpublish(selectedIds)
		handleReload()
		handleClose()
	}

	const handleDelete = async () => {
		await deleteMany(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div className="flex flex-row justify-center items-center space-x-2">
				<Button onClick={handlePublish}>Publish</Button>
				<Button variant="secondary" onClick={handleUnpublish}>Unpublish</Button>
				<AlertButton variant="secondary" onClick={handleDelete}>
					Delete
				</AlertButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminDocumentToolbar
