import React, { useState } from 'react'
import {
	List,
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	IconButton,
	Collapse,
	ListItemIcon,
} from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { TypographyVariants } from '../../types'

type ListExpandableProps = {
	expandable?: boolean
	title?: string
	icon?: React.ReactNode
	children: any
	enableBorder?: boolean
	closed?: boolean
	variant?: TypographyVariants
}

const ListExpandable: React.FC<ListExpandableProps> = (props) => {
	const {
		title,
		icon,
		variant = 'button',
		expandable,
		enableBorder,
		children,
		closed = false,
	} = props

	const [open, setOpen] = useState(!closed)
	const handleToggleClick = () => {
		if (expandable) setOpen(!open)
	}

	return (
		<List
			disablePadding
			sx={{
				...sx.root,
				...(enableBorder && sx.borderTop),
			}}
		>
			{title && (
				<ListItem
					sx={{
						...sx.listItem,
					}}
					disablePadding
					secondaryAction={
						expandable ? (
							<IconButton onClick={handleToggleClick}>
								<ChevronRight
									sx={{
										...sx.icon,
										...(open && sx.expandMore),
									}}
								/>
							</IconButton>
						) : null
					}
				>
					<ListItemButton
						sx={sx.listItemButton}
						disableRipple
						onClick={handleToggleClick}
					>
						{icon && <ListItemIcon sx={sx.listItemIcon}>{icon}</ListItemIcon>}
						<ListItemText
							primary={
								<Typography sx={sx.title} variant={variant}>
									{title}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			)}
			<Collapse in={open} timeout="auto" unmountOnExit>
				{children}
			</Collapse>
		</List>
	)
}

export default ListExpandable

const sx = {
	root: {
		width: '100%',
		minWidth: '280px',
	},
	listItem: {
		height: '40px',
	},
	listItemButton: {
		height: '40px',
	},
	listItemIcon: {
		minWidth: '40px',
		width: '40px',
	},
	title: {
		py: 0,
		lineHeight: '1em',
		color: 'text.secondary',
	},
	icon: {
		transition: 'transform 0.3s ease-in-out',
	},
	expandMore: {
		transform: 'rotate(90deg)',
	},
	borderTop: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
}
