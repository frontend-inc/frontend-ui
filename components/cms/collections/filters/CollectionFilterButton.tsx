import React, { useState } from 'react'
import { Hidden, Badge, Button } from '@mui/material'
import { Icon, Popup, Drawer, IconLoading } from '../../..'
import CollectionFilterList from './CollectionFilterList'
import { FilterOptionType, SearchFilterOptionType } from '../../../..'

type CollectionFilterButtonProps = {
	filters?: FilterOptionType[]
	loading?: boolean
	filterOptions?: SearchFilterOptionType[]
  disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const CollectionFilterButton: React.FC<CollectionFilterButtonProps> = (props) => {
	const {
		loading = false,
		filters = [],
		filterOptions = [],
		handleFilter,
    disableFilterCount=false
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
        sx={ sx.badge }
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
							<IconLoading loading={loading} />
						) : (
							<Icon name="SlidersHorizontal" color='secondary.contrastText' size={20} />
						)
					}
					onClick={handleClick}
				>
					Filters
				</Button>
			</Badge>
			<Hidden smDown>
				<Popup
					p={1}
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
					<CollectionFilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer open={open} handleClose={handleClose} title="Search">
					<CollectionFilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default CollectionFilterButton

const sx = {
	button: {
		width: {
			sm: '100%',
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
  }
}