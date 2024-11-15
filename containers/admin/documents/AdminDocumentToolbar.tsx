'use client'

import React from 'react'
import { Button, ResourceToolbarModal, AlertButton } from '../../../components'
import { useAdmin, useAdminDocuments } from '../../../hooks'

const AdminDocumentToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, collectionId, handleClose, selectedIds, handleReload } =
		props || {}

	const { publish, unpublish, updateDocuments, deleteDocuments } =
		useAdminDocuments({
			collection: collectionId,
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
		await deleteDocuments(selectedIds)
		handleReload()
		handleClose()
	}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div className="flex flex-row justify-center items-center space-x-2">
				<Button onClick={handlePublish}>Publish</Button>
				<Button variant="secondary" onClick={handleUnpublish}>
					Unpublish
				</Button>
				<AlertButton variant="secondary" onClick={handleDelete}>
					Delete
				</AlertButton>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminDocumentToolbar
