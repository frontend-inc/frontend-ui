'use client'

import React from 'react'
import { Sheet, CircularLoader } from '../..'
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
		<Sheet
			open={open}
			handleClose={handleClose}
			title={title}
			disablePadding={disablePadding}
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
			{loading == true ? <CircularLoader size={44} /> : children}
		</Sheet>
	)
}

export default ResourceModal
