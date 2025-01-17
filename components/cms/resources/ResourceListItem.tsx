'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { Checkbox } from '@nextui-org/react'
import { MenuButton } from '../../../components'
import { GripVertical } from 'lucide-react'
import { Typography } from '../../../components'
import { Image, RemixIcon } from '../../../components'

export type ResourceListItemProps = {
	selectable?: boolean
	selected?: boolean
	primary: React.ReactNode
	secondary?: React.ReactNode
	avatar?: React.ReactNode
	icon?: string
	color?: string
	image?: string
	handleClick?: () => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	handleReload?: () => void
	secondaryAction?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	disableImage?: boolean
}

export default function ResourceListItem(props: ResourceListItemProps) {
	const {
		icon,
		avatar,
		color = 'bg-accent',
		primary,
		secondary,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryAction,
		sortable,
		selectable,
		selected,
		disableImage = false,
	} = props

	return (
		<div
			className={cn(
				'group',
				'hover:bg-content2 transition-all duration-200 p-1 py-2 overflow-hidden rounded-xl',
				selected && 'border-primary'
			)}
		>
			<div className="flex items-center p-1 rounded space-x-4">
				{sortable && (
					<GripVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 text-foreground cursor-grab active:cursor-grabbing" />
				)}
				{selectable && (
					<Checkbox isSelected={selected} onValueChange={handleSelect} />
				)}
				{avatar && (
					<div className="mr-2">
						<button
							className="w-full h-full focus:outline-none focus:ring-2 items-center justify-center"
							onClick={handleClick}
						>
							{avatar}
						</button>
					</div>
				)}
				{!disableImage && (
					<div className="mr-2 min-w-[64px] min-h-[64px]">
						<Image
							src={image}
							height={64}
							width={64}
							alt={image}
							handleClick={handleClick}
						/>
					</div>
				)}
				{icon && (
					<button
						className="focus:outline-none focus:ring-2 items-center justify-center"
						onClick={handleClick}
					>
						<Avatar className="mr-2 rounded">
							<AvatarFallback className={color}>
								<RemixIcon name={icon} className="text-white" />
							</AvatarFallback>
						</Avatar>
					</button>
				)}
				<div className="flex-grow cursor-pointer" onClick={handleClick}>
					<Typography variant="body1">{primary}</Typography>
					{secondary && (
						<Typography variant="body2" className="text-foreground/70">
							{secondary}
						</Typography>
					)}
				</div>
				<div className="flex items-center space-x-1">
					{secondaryAction}
					{(handleEdit || handleDelete) && (
						<MenuButton handleEdit={handleEdit} handleDelete={handleDelete} />
					)}
				</div>
			</div>
		</div>
	)
}
