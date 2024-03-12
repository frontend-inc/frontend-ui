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
	Hidden,
} from '@mui/material'
import { Icon, Popup, Drawer } from '../../../ui'
import { SORT_DIRECTIONS } from '../../../../constants/index'
import FilterInput from '../filters/FilterInput'

type SortFieldsProps = {
	fields: any[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SortFields: React.FC<SortFieldsProps> = (props) => {
	const { fields, sortBy, sortDirection, handleSortBy, handleSortDirection } =
		props

	return (
		<>
			<FilterInput label="Sort by">
				{fields?.map((field: any) => (
					<ListItem disablePadding disableGutters sx={sx.listItem}>
						<ListItemButton
							sx={sx.listItemButton}
							disableRipple
							onClick={() => handleSortBy(field?.name)}
						>
							<ListItemIcon sx={sx.listItemIcon}>
								<Radio
									checked={sortBy == field?.name}
									onChange={() => handleSortBy(field?.name)}
								/>
							</ListItemIcon>
							<ListItemText
								primary={
									<Typography variant="button">{field?.name}</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</FilterInput>
			<FilterInput label="Direction">
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
									<Typography variant="button">{direction?.label}</Typography>
								}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</FilterInput>
		</>
	)
}

type SortButtonProps = {
	fields: any[]
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (sortBy: string) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const SortButton: React.FC<SortButtonProps> = (props) => {
	const { fields, sortBy, sortDirection, handleSortBy, handleSortDirection } =
		props

	const [showModal, setShowModal] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleOpenModal = (event) => {
		setAnchorEl(event.currentTarget)
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<>
			<ButtonGroup>
				<Button
					sx={sx.button}
					variant="text"
					onClick={handleOpenModal}
					endIcon={
						sortDirection == 'asc' ? (
							<Icon name="ArrowUp" size={20} />
						) : (
							<Icon name="ArrowDown" size={20} />
						)
					}
				>
					Sort {sortBy == 'id' ? 'by' : sortBy}
				</Button>
			</ButtonGroup>
			<Hidden smDown>
				<Popup
					p={1}
					anchorEl={anchorEl}
					open={showModal}
					handleClose={handleCloseModal}
				>
					<SortFields
						fields={fields}
						sortBy={sortBy}
						sortDirection={sortDirection}
						handleSortBy={handleSortBy}
						handleSortDirection={handleSortDirection}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer
					title="Sort"
					open={showModal}
					handleClose={handleCloseModal}
					anchor={'right'}
				>
					<SortFields
						fields={fields}
						sortBy={sortBy}
						sortDirection={sortDirection}
						handleSortBy={handleSortBy}
						handleSortDirection={handleSortDirection}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default SortButton

const sx = {
	button: {
		color: 'text.secondary',
		borderRight: 'none',
		'&:hover': {
			borderRight: 'none',
		},
	},
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
	icon: {
		height: '20px',
		width: '20px',
	},
}
