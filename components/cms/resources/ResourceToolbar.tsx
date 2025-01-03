'use client'

import React from 'react'
import { ResourceToolbarModal } from '../..'
import { Button } from '@nextui-org/react'

type ResourceToolbarModalProps = {
	open: boolean
	handleClose: () => void
	enableDelete?: boolean
	enablePublish?: boolean
	handleDelete?: () => void
	handlePublish?: () => void
	handleUnpublish?: () => void
	actions: React.ReactNode
	selected: any[]
	selectedIds: number[] | string[]
}

const ResourceToolbar: React.FC<ResourceToolbarModalProps> = (props) => {
	const {
		open,
		selected,
		selectedIds,
		enableDelete,
		enablePublish,
		handleDelete,
		handlePublish,
		handleUnpublish,
		handleClose,
		...rest
	} = props || {}

	return (
		<ResourceToolbarModal open={open} handleClose={handleClose}>
			<div className="flex flex-row justify-center items-center space-x-2">
				{enablePublish && (
					<>
						<Button fullWidth variant="solid" onPress={handlePublish}>
							Publish
						</Button>
						<Button fullWidth variant="solid" onPress={handleUnpublish}>
							Unpublish
						</Button>
					</>
				)}
				{enableDelete && (
					<Button fullWidth color="danger" onPress={handleDelete}>
						Delete
					</Button>
				)}
			</div>
		</ResourceToolbarModal>
	)
}

export default ResourceToolbar
