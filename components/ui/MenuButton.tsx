'use client'

import React from 'react'
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { cn, Button } from '@nextui-org/react'
import { RemixIcon } from '../../components'

type MenuButtonProps = {
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	className?: string
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
	const { handleEdit, handleDelete, className } = props

	const handleAction = (action: React.Key) => {
		switch (action) {
			case 'edit':
				//@ts-ignore
				handleEdit()
				break
			case 'delete':
				//@ts-ignore
				handleDelete()
				break
		}
	}

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					isIconOnly
					aria-label="More options"
					variant="light"
					className="min-w-8 w-8 h-8"
				>
					<RemixIcon name="ri-more-2-line" className={className} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu onAction={handleAction}>
				{handleEdit ? <DropdownItem key="edit">Edit</DropdownItem> : null}
				{handleDelete ? <DropdownItem key="delete">Delete</DropdownItem> : null}
			</DropdownMenu>
		</Dropdown>
	)
}

export default MenuButton
