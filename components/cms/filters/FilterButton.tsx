import React, { useState } from 'react'
import { Hidden, Box, Badge, Button } from '@mui/material'
import { Icon, Popup, Drawer, IconLoading } from '../..'
import FilterList from './FilterList'
import { FilterOptionType, SearchFilterOptionType } from '../../..'

export type FilterButtonProps = {
	filters?: FilterOptionType[]
	loading?: boolean
	filterOptions?: SearchFilterOptionType[]
	disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		filterOptions = [],
		handleFilter,
		disableFilterCount = false,
	} = props || {}

	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (ev) => {
		setAnchorEl(ev.currentTarget)
		setOpen(true)
	}

	const handleClose = () => setOpen(false)

	return (
		<Box sx={sx.root}>
			<Badge
				sx={sx.badge}
				badgeContent={disableFilterCount ? 0 : filters?.length}
				color="primary"
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Button
					sx={{
						...sx.button,
						...(filters?.length > 0 && sx.hideBorder),
					}}
					color="secondary"
					variant="contained"
					startIcon={
						loading ? (
							loading && <IconLoading />
						) : (
							<Icon name="SlidersHorizontal" color="secondary.contrastText" />
						)
					}
					onClick={handleClick}
				>
					Filters
				</Button>
			</Badge>
			<Hidden smDown>
				<Popup
					p={0}
					anchorEl={anchorEl}
					open={open}
					handleClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer
					open={open}
					handleClose={handleClose}
					title="Search"
					disablePadding
				>
					<FilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Drawer>
			</Hidden>
		</Box>
	)
}

export default FilterButton

const sx = {
	root: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
	hideBorder: {
		borderRight: 'none',
		'&:hover': {
			borderRight: 'none',
		},
	},
	clearButton: {
		width: '20px',
		borderLeft: 'none',
		'&:hover': {
			borderLeft: 'none',
		},
	},
	mobileDrawer: {
		width: {
			xs: '270px',
			sm: '360px',
		},
	},
	badge: {
		width: '100%',
	},
}
