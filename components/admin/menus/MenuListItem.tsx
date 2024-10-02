import React from 'react'
import {
	Box,
	Stack,
  Typography,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from '@mui/material'
import { Icon } from '../../../components'
import { MenuButton } from '../../../components'

type MenuListItemProps = {
	selected?: boolean
	title: string
	description?: string
	icon?: string
	color?: string
	enableBorder?: boolean
	secondaryActions?: React.ReactNode
	handleClick?: () => void
	handleEdit?: null | ((item: any) => void)
	handleDelete?: null | ((item: any) => void)
}

const MenuListItem: React.FC<MenuListItemProps> = (props) => {
	const {
		selected,
		secondaryActions,
		enableBorder = false,
		icon,
		color = 'transparent',
		title,
		description,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ListItem
			disablePadding
			sx={{
				...sx.root,
				...(selected && sx.selected),
				...(enableBorder && sx.rootBorder),
			}}
			secondaryAction={
				<Stack direction="row" spacing={1} sx={sx.secondaryActions}>
					{secondaryActions}
					{(handleEdit || handleDelete) && (
						<MenuButton
							handleEdit={handleEdit ? handleEdit : undefined}
							handleDelete={handleDelete ? handleDelete : undefined}
						/>
					)}
				</Stack>
			}
		>
			<ListItemButton
				disableRipple
				sx={sx.listItemButton}
				onClick={handleClick}
			>
				{icon && (
					<ListItemIcon sx={sx.listItemIcon}>
						<Box
							sx={{
								...sx.iconContainer,
								bgcolor: color,
							}}
						>
							<Icon name={icon} />
						</Box>
					</ListItemIcon>
				)}
				<ListItemText 
          primary={
            <Typography 
              color="text.primary" 
              variant="body1"
            >
              { title }
            </Typography>
          }
         secondary={
            <Typography 
              color="text.secondary" 
              variant="body2"
            >
              { description }
            </Typography>
          } 
         />
			</ListItemButton>
		</ListItem>
	)
}

export default MenuListItem

const sx = {
	root: {
		p: 0,
		mb: 0.5,
		borderRadius: 1,
		border: '3px solid',
		borderColor: 'transparent',
		'&:hover': {
			bgcolor: 'primary.dark',
		},
	},
	rootBorder: {
		borderColor: 'divider',
		mb: 1,
	},
	listItemIcon: {
		mr: 1.5,
		minWidth: 36,
		width: 36,
	},
	selected: {
		bgcolor: 'primary.main',
		color: 'primary.contrastText',
		'&:hover': {
			bgcolor: 'primary.dark',
		},
		boxShadow: 1,
	},
	listItemButton: {
		px: 1,
		py: '4px',
	},
	iconContainer: {
		mr: 1,
		minWidth: '36px',
		minHeight: '36px',
		borderRadius: '8px',
		bgcolor: 'primary.main',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	secondaryActions: {
		alignItems: 'flex-end',
	},
}
