'use client'

import React from 'react'
import { ResourceToolbarModal } from '../../../components'
import { Button } from '../../../components'
import { useResource } from 'frontend-js'
import { useAdmin } from '../../../hooks'

const AdminProductCollectionToolbar = (props) => {
	const { apiUrl } = useAdmin()

	const { open, handleClose, selectedIds, handleReload } = props || {}

	const { publish, unpublish, deleteMany } = useResource({
		url: `${apiUrl}/product_collections`,
		name: 'product_collection',
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
			<div className="flex flex-row space-x-2">
				<Button onClick={handlePublish}>Publish</Button>
				<Button variant="secondary" onClick={handleUnpublish}>
					Unpublish
				</Button>
				<Button variant="secondary" onClick={handleDelete}>
					Delete
				</Button>
			</div>
		</ResourceToolbarModal>
	)
}

export default AdminProductCollectionToolbar
