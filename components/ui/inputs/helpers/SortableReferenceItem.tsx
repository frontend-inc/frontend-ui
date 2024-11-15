'use client'

import React from 'react'
import { Icon, Image, MenuButton } from '../../..'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../../core'
import { GripVertical } from 'lucide-react'

type SortableReferenceItemProps = {
	image: string
	title: string
	isDragging?: boolean
	handleDelete: () => void
	handleEdit: () => void
}

export default function SortableReferenceItem({
	image,
	title,
	isDragging,
	handleDelete,
	handleEdit,
}: SortableReferenceItemProps) {
	return (
		<div
			className={cn(
				'flex items-center justify-between',
				'px-1 py-2',
				'transition-shadow duration-200',
				'border border-border',
				'rounded',
				'my-1',
				'hover:shadow-md',
				isDragging && 'shadow-md'
			)}
		>
			<div className="flex items-center">
				<div className="mr-2 cursor-grab">
					<GripVertical />
				</div>
				<div className="mr-2 w-8 h-8">
					<Image alt="image" src={image} height={32} width={32} />
				</div>
				<Typography variant="body1">{title}</Typography>
			</div>
			<MenuButton handleDelete={handleDelete} handleEdit={handleEdit} />
		</div>
	)
}
