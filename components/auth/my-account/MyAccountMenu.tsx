import React from 'react'
import {
	Box,
	Typography,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { Icon, UserAvatar } from '../../../components'
import { useAuth } from 'frontend-js'

type MyAccountMenuProps = {
	tab?: number
	enableTeams?: boolean
	enableStripe?: boolean
	handleChange: (ev: any, newValue: number) => void
}

const MyAccountMenu: React.FC<MyAccountMenuProps> = (props) => {
	const { enableTeams, handleChange } = props || {}

	const TABS = [{ label: 'My Account', value: 0 }]
	const TEAM_TABS = [
		{ label: 'Teams', value: 1 },
		{ label: 'Members', value: 2 },
	]
	let tabs = TABS
	if (enableTeams) {
		tabs = [...tabs, ...TEAM_TABS]
	}

	const { currentUser } = useAuth()

	return (
		<>
			<Box sx={sx.avatar}>
				<UserAvatar user={currentUser} size={96} />
			</Box>
			<List sx={sx.root}>
				{tabs?.map((tab, index) => (
					<ListItem
						key={index}
						sx={sx.listItem}
						secondaryAction={
							<IconButton>
								<Icon name="ChevronRight" color="text.primary" size={24} />
							</IconButton>
						}
					>
						<ListItemButton
							sx={sx.listItemButton}
							onClick={(ev) => handleChange(ev, tab?.value)}
						>
							<ListItemText
								primary={
									<Typography
										sx={sx.menuItem}
										variant="body1"
										color="text.primary"
									>
										{tab?.label}
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default MyAccountMenu

const sx = {
	root: {
		p: 0,
	},
	listItem: {
		p: 0,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	menuItem: {
		pl: 2,
	},
	listItemButton: {
		py: 1,
	},
	avatar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		p: 2,
	},
}
