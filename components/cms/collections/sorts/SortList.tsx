import React, { useState } from 'react'
import {
	ButtonGroup,
	Button,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	Typography,
	Radio,
} from '@mui/material'
import { ExpandableList } from '../../../../components'
import { SORT_DIRECTIONS } from '../../../../constants/index'
import { SortOptionType } from '../../../../types'

type SortListProps = {
	sortOptions: SortOptionType[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SortList: React.FC<SortListProps> = (props) => {
	const {
		sortOptions,
		sortBy,
		sortDirection,
		handleSortBy,
		handleSortDirection,
	} = props

	return (
		<>
			<ExpandableList label="Sort by">
				{sortOptions?.map((sortOption: any) => (
					<ListItem disablePadding disableGutters sx={sx.listItem}>
						<ListItemButton
							sx={sx.listItemButton}
							disableRipple
							onClick={() => handleSortBy(sortOption)}
						>
							<ListItemIcon sx={sx.listItemIcon}>
								<Radio
									checked={sortBy == sortOption?.field}
									onChange={() => handleSortBy(sortOption?.field)}
								/>
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="button">{sortOption?.label}</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</ExpandableList>
			<ExpandableList label="Direction">
				{SORT_DIRECTIONS.map((direction, i) => (
					<ListItem disablePadding key={i} sx={sx.listItem}>
						<ListItemButton
							sx={sx.listItemButton}
							disableRipple
							onClick={() => handleSortDirection(direction?.value)}
						>
							<ListItemIcon sx={sx.listItemIcon}>
								<Radio
									checked={sortDirection == direction?.value}
									onChange={() => handleSortDirection(direction?.value)}
								/>
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography color="text.primary" variant="button">
										{direction?.label}
									</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</ExpandableList>
		</>
	)
}

export default SortList

const sx = {
	listItem: {
		py: 0,
	},
	listItemButton: {
		p: 0,
	},
	listItemIcon: {
		minWidth: '32px',
	},
	sortDirectionButton: {
		width: '32px',
		borderLeft: 'none',
		'&:hover': {
			borderLeft: 'none',
		},
	},
}
