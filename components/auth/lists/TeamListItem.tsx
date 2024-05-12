import React, { useState, useEffect } from 'react'
import {
	Typography,
	Stack,
	Box,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
} from '@mui/material'
import { TeamAvatar, MenuButton } from '../../../components'
import { TeamType } from '../../../types'

type TeamListItemProps = {
	team: TeamType
	selected?: boolean
	isAdmin?: boolean
	handleClick?: () => void | undefined
	handleEdit: (team: TeamType) => void | undefined
	handleDelete: (team: TeamType) => void | undefined
}

const TeamListItem: React.FC<TeamListItemProps> = (props) => {
	const {
		team,
		selected = false,
		isAdmin = false,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	const [canEdit, setCanEdit] = useState(false)
	const [canDelete, setCanDelete] = useState(false)

	useEffect(() => {
		if (isAdmin) {
			setCanEdit(true)
			setCanDelete(true)
		}
	}, [team, isAdmin])

	return (
		<ListItem
			sx={{
				...sx.root,
				...(selected && sx.selected),
			}}
			disableGutters
			secondaryAction={
				(canEdit || canDelete) && (
					<MenuButton
						handleEdit={canEdit && (() => handleEdit(team))}
						handleDelete={canDelete && (() => handleDelete(team))}
					/>
				)
			}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon sx={sx.listItemIcon}>
					<TeamAvatar team={team} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="text.primary">
								{team.name}
							</Typography>
						</Stack>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default TeamListItem

const sx = {
	root: {
		p: 0,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	selected: {
		border: '3px solid',
		borderColor: 'primary.main',
	},
	listItemIcon: {
		mr: 2,
	},
	avatar: {
		bgcolor: 'primary.main',
	},
	icon: {
		color: 'text.primary',
	},
	secondaryActions: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
}
