'use client'

import React from 'react'
import { Drawer, CircularLoader } from '../..'
import { Button } from '../../core'

export type ResourceModalProps = {
	title?: string
	open: boolean
	handleClose: () => void
	loading?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleEdit?: () => void
	handleDelete?: () => void
	disablePadding?: boolean
	children?: any
}

const ResourceModal: React.FC<ResourceModalProps> = (props) => {
	const {
		loading,
		title,
		open,
		handleClose,
		children,
		enableEdit,
		enableDelete,
		handleEdit,
		handleDelete,
		disablePadding,
	} = props || {}

	return (
		<Drawer
			open={open}
			handleClose={handleClose}
			title={title}
			buttons={
				(enableEdit || enableDelete) && (
					<div className="w-fill flex flex-row space-x-2">
						{enableEdit && (
							<Button fullWidth onClick={handleEdit}>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button fullWidth color="secondary" onClick={handleDelete}>
								Delete
							</Button>
						)}
					</div>
				)
			}
		>
			{loading == true ? (
				<div className="min-h-[400px] flex flex-col items-center justify-center">
					<CircularLoader size="lg" />
				</div>
			) : (
				children
			)}
		</Drawer>
	)
}

export default ResourceModal
