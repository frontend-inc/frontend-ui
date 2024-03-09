import React, { useState } from 'react'
import { Hidden, Badge, ButtonGroup, Button, Stack } from '@mui/material'
import { Popup, Drawer, ButtonLoader } from '../../../../components'
import { FilterList as FilterIcon } from '@mui/icons-material'
import FilterField from './FilterField'
import { FilterOption } from '../../../../types'

type FilterButtonProps = {
	filters?: FilterOption[]
	loading?: boolean
	fields?: any
	handleFilter: (filter: FilterOption) => void
	handleClear: () => void
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		fields = [],
		handleFilter,
	} = props || {}

	const [open, setOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)

	const handleClick = (ev) => {
		setAnchorEl(ev.currentTarget)
		setOpen(true)
	}

	const handleClose = () => setOpen(false)

	return (
		<>
			<Badge
				badgeContent={filters?.length}
				color="secondary"
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<ButtonGroup>
					<Button
						sx={{
							...sx.button,
							...(filters?.length > 0 && sx.hideBorder),
						}}
						variant="text"
						startIcon={
							loading ? (
								<ButtonLoader loading={loading} />
							) : (
								<FilterIcon sx={sx.icon} />
							)
						}
						onClick={handleClick}
					>
						Filters
					</Button>
				</ButtonGroup>
			</Badge>
			<Hidden smDown>
				<Popup p={1} anchorEl={anchorEl} open={open} handleClose={handleClose}>
					<Stack spacing={2}>
						{fields?.map((field, index) => (
							<FilterField
								key={index}
								filters={filters}
								field={field}
								handleFilter={handleFilter}
							/>
						))}
					</Stack>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer open={open} handleClose={handleClose} title="Search">
					<Stack spacing={2}>
						{fields?.map((field, index) => (
							<FilterField
								key={index}
								filters={filters}
								field={field}
								handleFilter={handleFilter}
							/>
						))}
					</Stack>
				</Drawer>
			</Hidden>
		</>
	)
}

export default FilterButton

const sx = {
	button: {
		color: 'text.secondary',
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
	icon: {
		height: 20,
		width: 20,
	},
	mobileDrawer: {
		width: {
			xs: '270px',
			sm: '360px',
		},
	},
}
