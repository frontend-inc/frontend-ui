'use client'

import React from 'react'
import { Sheet, CircularLoader } from '../..'
import { Button } from '@nextui-org/react'

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
  maxWidth?:'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
		maxWidth = 'xs',
	} = props || {}

	return (
		<Sheet
			open={open}
			handleClose={handleClose}
			title={title}
			maxWidth={maxWidth}
			buttons={
				(enableEdit || enableDelete) && (
					<div className="w-full flex flex-row space-x-2">
						{enableEdit && (
							<Button                 
                variant="ghost"
                fullWidth 
                onPress={handleEdit}>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button 
                variant="ghost"
                fullWidth 
                color="danger" 
                onPress={handleDelete}
              >
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
		</Sheet>
	)
}

export default ResourceModal
