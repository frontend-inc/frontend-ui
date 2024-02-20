import React from 'react'
import { Badge, Box, Menu, MenuItem } from '@mui/material'

type UserMenuProps = {
	open: boolean
	anchorEl: HTMLElement | null
	toggleMenu: (ev: any) => void
	handleLogoutClick: () => void
	handleClick: (path: string) => void
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
	const { open, anchorEl, toggleMenu, handleLogoutClick, handleClick } = props

	return (
		<Menu open={open} onClose={toggleMenu} anchorEl={anchorEl}>
			<MenuItem onClick={() => handleClick('/my-account')}>My Account</MenuItem>
			<MenuItem onClick={handleLogoutClick}>
				<Badge
					color="success"
					variant="dot"
					sx={sx.badgeOnline}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<Box mx={1} />
				</Badge>
				Sign Out
			</MenuItem>
		</Menu>
	)
}

export default UserMenu

const sx = {
	badgeOnline: {
		height: 10,
		width: 10,
	},
}
