import React from 'react'
import { MenuItem, ListItemIcon, Box, IconButton, Menu } from '@mui/material'
import { useMenu } from '../../hooks'
import { Icon } from '../../components'

type MenuButtonProps = {
	children?: React.ReactNode
	icon?: string
	color?: string
	enableIcons?: boolean
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
	const {
		children,
		icon = 'Ellipsis',
		color,
		enableIcons = false,
		handleEdit,
		handleDelete,
	} = props

	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	// Ensure menu closes after click
	const handleDefaultClick = (e) => {
		if (open) closeMenu()
	}

	return (
		<Box onClick={handleDefaultClick}>
			<IconButton onClick={toggleMenu}>
				<Icon name={icon} size={20} color={color} />
			</IconButton>
			<Menu open={open} anchorEl={anchorEl} onClose={closeMenu}>
				{children}
				{handleEdit && (
					<MenuItem onClick={handleEdit}>
						{enableIcons && (
							<ListItemIcon>
								<Icon name="Pencil" size={20} />
							</ListItemIcon>
						)}
						Edit
					</MenuItem>
				)}
				{handleDelete && (
					<MenuItem onClick={handleDelete}>
						{enableIcons && (
							<ListItemIcon>
								<Icon name="Trash" size={20} />
							</ListItemIcon>
						)}
						Delete
					</MenuItem>
				)}
			</Menu>
		</Box>
	)
}

export default MenuButton
