'use client'

import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { Button } from '../../components'
import { RemixIcon } from '../../components'

type MenuButtonProps = {
	children?: React.ReactNode
	icon?: string
	color?: string
	size?: 'small' | 'medium' | 'large'
	enableIcons?: boolean
	handleEdit?: false | ((item: any) => void)
	handleDelete?: false | ((item: any) => void)
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
	const { children, handleEdit, handleDelete } = props

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<RemixIcon name="ri-more-2-line" className="text-foreground" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="bg-background w-[100px]">
				{children}
				{handleEdit && (
					<DropdownMenuItem className="text-foreground" onClick={handleEdit}>
						Edit
					</DropdownMenuItem>
				)}
				{handleDelete && (
					<DropdownMenuItem className="text-foreground" onClick={handleDelete}>
						Delete
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default MenuButton
