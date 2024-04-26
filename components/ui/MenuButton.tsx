import React from 'react'
import { Box, IconButton, Menu } from '@mui/material'
import { useMenu } from '../../hooks'
import { Icon } from '../../components'

type MenuButtonProps = {
	children: React.ReactNode
	icon?: React.ReactNode
	size?: 'small' | 'medium'
	selected?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
	const { children, icon='EllipsisVertical', selected = false, size = 'small' } = props

	const { open, anchorEl, closeMenu, toggleMenu } = useMenu()

	// Ensure menu closes after click
	const handleDefaultClick = (e) => {
		if (open) closeMenu()
	}

	return (
		<Box onClick={handleDefaultClick}>
			<IconButton size={size} onClick={toggleMenu}>				
        <Icon 
          name={ icon }
          size={20}
          color={ selected ? 'primary.contrastText' : 'text.primary' }
        />				
			</IconButton>
			<Menu open={open} anchorEl={anchorEl} onClose={closeMenu}>
				{children}
			</Menu>
		</Box>
	)
}

export default MenuButton
