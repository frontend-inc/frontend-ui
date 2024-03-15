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
import { TypographyVariantsType } from '../../../types'

type FilterListProps = {
	expandable?: boolean
	label?: string
	count?: number
	icon?: React.ReactNode
	children: any
	enableBorder?: boolean
	disablePadding?: boolean
	closed?: boolean
	variant?: TypographyVariantsType
}

const FilterList: React.FC<FilterListProps> = (props) => {
	const {
		label,
		count,
		variant = 'subtitle2',
		expandable = true,
		enableBorder,
		disablePadding = false,
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
				...(!disablePadding && sx.padding),
				...(enableBorder && sx.borderTop),
			}}
		>
			{label && (
				<ListItem
					sx={sx.listItem}
					disablePadding
					disableGutters
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
						<ListItemText
							primary={
								<Typography sx={sx.label} variant={variant} color='text.primary'>
									{label} {count > 0 && `(${count})`}
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

export default FilterList

const sx = {
	root: {
		width: '100%',
    borderBottom: "1px solid",
    borderColor: "divider",
	},
	padding: {
		px: 1,
	},
	listItem: {
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		height: '40px',
	},
	listItemButton: {
    borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		height: '40px',
	},
	listItemIcon: {
		minWidth: '40px',
		width: '40px',
	},
	label: {
		py: 0,
		lineHeight: '1em',
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
