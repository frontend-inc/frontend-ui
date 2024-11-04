'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Button } from '../../../components'
import { Typography } from '../../../components'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { MoreVertical, Pencil, Trash } from 'lucide-react'
import { Icon } from '../../../components'

interface SidebarMenuItemProps {
	title: string
	icon?: string
	color?: string
	selected?: boolean
	description?: string
	secondaryAction?: React.ReactNode
	handleClick: () => void
	handleEdit?: () => void
	handleDelete?: () => void
}

export default function SidebarMenuItem({
	selected = false,
	title,
	color = 'bg-transparent',
	icon,
	secondaryAction,
	handleClick,
	handleEdit,
	handleDelete,
}: SidebarMenuItemProps) {
	return (
		<div
			className={cn(
				'group flex items-center rounded-md justify-between hover:bg-muted',
				selected && 'bg-muted text-foreground'
			)}
		>
			<button
				onClick={handleClick}
				className="w-full flex gap-2 py-3 pl-4 px-2 rounded-md group items-center focus:outline-none"
			>
				{icon && (
					<div
						className={cn(
							color,
							'h-8 w-8 rounded-md flex items-center justify-center'
						)}
					>
						<Icon name={icon} className="w-5 h-5 text-foreground" />
					</div>
				)}
				<Typography variant="body2">{title}</Typography>        
			</button>      
      {(selected && secondaryAction) ? secondaryAction : null }
			{(handleEdit || handleDelete) && (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreVertical className="h-4 w-4 text-foreground" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-[160px]">            
						{handleEdit && (
							<DropdownMenuItem onClick={handleEdit}>
								<Pencil className="mr-2 h-4 w-4" />
								<span>Edit</span>
							</DropdownMenuItem>
						)}
						{handleDelete && (
							<DropdownMenuItem onClick={handleDelete}>
								<Trash className="mr-2 h-4 w-4" />
								<span>Delete</span>
							</DropdownMenuItem>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	)
}
