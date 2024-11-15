'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { Checkbox } from 'frontend-shadcn'
import { Button } from '../../../components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { GripVertical, MoreVertical } from 'lucide-react'
import { Typography } from '../../core'
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
	handleClick?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	handleSelect?: () => void
	handleReload?: () => void
	secondaryAction?: React.ReactNode
	menuActions?: React.ReactNode
	sortable?: boolean
	isDragging?: boolean
	disableImage?: boolean
	enableBorder?: boolean
}

export default function ResourceListItem(props: ResourceListItemProps) {
	const {
		icon,
		avatar,
		color,
		primary,
		secondary,
		image,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		secondaryAction,
		menuActions,
		sortable,
		selectable,
		selected,
		disableImage = false,
		enableBorder = true,
	} = props

	return (
		<div
			className={cn(
				'bg-muted/20 hover:bg-muted/50 p-1 py-2 overflow-hidden rounded-xl',
				enableBorder &&
					'border-border hover:shadow-md mb-1 transition-shadow duration-200',
				selected && 'border-primary'
			)}
		>
			<div className="flex items-center p-1 rounded space-x-4">
				{sortable && (
					<GripVertical className="w-5 h-5 text-muted-foreground cursor-grab active:cursor-grabbing" />
				)}
				{selectable && (
					<Checkbox
						className="text-foreground"
						checked={selected}
						onCheckedChange={handleSelect}
					/>
				)}
				{avatar && (
					<div className="mr-2">
						<button
							className="w-full h-full focus:outline-none focus:ring-2"
							onClick={handleClick}
						>
							{avatar}
						</button>
					</div>
				)}
				{!disableImage && (
					<div className="mr-2 w-[72px] h-[72px]">
						<button
							className="w-full h-full focus:outline-none focus:ring-2"
							onClick={handleClick}
						>
							<Image src={image || null} aspectRatio={1.0} alt={image} />
						</button>
					</div>
				)}
				{icon && (
					<button
						className="focus:outline-none focus:ring-2"
						onClick={handleClick}
					>
						<Avatar className="mr-2 rounded">
							<AvatarFallback className={color}>
								<RemixIcon name={icon} />
							</AvatarFallback>
						</Avatar>
					</button>
				)}
				<div className="flex-grow cursor-pointer" onClick={handleClick}>
					<Typography variant="body1">{primary}</Typography>
					{secondary && (
						<Typography variant="body2" className="text-muted-foreground">
							{secondary}
						</Typography>
					)}
				</div>
				<div className="flex items-center space-x-1">
					{secondaryAction}
					{(menuActions || handleEdit || handleDelete) && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="h-8 w-8 p-0">
									<span className="sr-only">Open menu</span>
									<MoreVertical className="h-4 w-4 text-foreground" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-background" align="end">
								{menuActions}
								{handleEdit && (
									<DropdownMenuItem onClick={() => handleEdit({})}>
										Edit
									</DropdownMenuItem>
								)}
								{handleDelete && (
									<DropdownMenuItem onClick={() => handleDelete({})}>
										Delete
									</DropdownMenuItem>
								)}
							</DropdownMenuContent>
						</DropdownMenu>
					)}
				</div>
			</div>
		</div>
	)
}
