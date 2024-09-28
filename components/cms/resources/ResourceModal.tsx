import React from 'react'
import { Drawer, CircularLoader } from '../..'
import { Button, Stack } from '@mui/material'

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
			disablePadding={disablePadding}
			buttons={
				(enableEdit || enableDelete) && (
					<Stack direction="row" spacing={1} sx={{ width: '100%' }}>
						{enableEdit && (
							<Button
								fullWidth
								variant="contained"
								color="primary"
								onClick={handleEdit}
							>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button
								fullWidth
								variant="contained"
								color="secondary"
								onClick={handleDelete}
							>
								Delete
							</Button>
						)}
					</Stack>
				)
			}
		>
			{loading == true ? <CircularLoader size={44} /> : children}
		</Drawer>
	)
}

export default ResourceModal
