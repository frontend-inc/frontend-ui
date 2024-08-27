import React from 'react'
import ListFilterList from './FilterList'
import { Button, Hidden } from '@mui/material'
import { Icon, Drawer } from '../..'
import { useMenu } from '../../../hooks'

type ListFilterListProps = {
	filters: any
	filterOptions: any
	handleFilter: any
}

const ListSearchFilters: React.FC<ListFilterListProps> = (props) => {
	const { filters = [], filterOptions = [], handleFilter } = props
	const { open, toggleMenu, closeMenu } = useMenu()

	return (
		<>
			<Hidden smDown>
				<ListFilterList
					filters={filters}
					filterOptions={filterOptions}
					handleFilter={handleFilter}
				/>
			</Hidden>
			<Hidden smUp>
				<Button
					sx={sx.button}
					onClick={toggleMenu}
					color="secondary"
					variant="contained"
					startIcon={<Icon name="SlidersHorizontal"  />}
				>
					Filters
				</Button>
				<Drawer open={open} handleClose={closeMenu} anchor="right">
					<ListFilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default ListSearchFilters

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
