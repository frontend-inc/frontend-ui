'use client'

import React from 'react'
import ListFilterList from './FilterList'
import { Hidden } from '../../core'
import { Button } from 'frontend-shadcn'
import { Sheet } from '../..'
import { useMenu } from '../../../hooks'
import { Icon } from '../..'

type ListFilterListProps = {
	filters: any
	filterOptions: any
	handleFilter: any
}

const SearchFilters: React.FC<ListFilterListProps> = ({
	filters = [],
	filterOptions = [],
	handleFilter,
}) => {
	const { open, toggleMenu, closeMenu } = useMenu()

	return (
		<>
			<div className="hidden sm:block">
				<ListFilterList
					filters={filters}
					filterOptions={filterOptions}
					handleFilter={handleFilter}
				/>
			</div>
			<Hidden smUp>
				<Button variant="secondary" className="w-full" onClick={toggleMenu}>
					<Icon name="SlidersHorizontal" className="mr-2 h-4 w-4" />
					Filters
				</Button>
				<Sheet open={open} handleClose={closeMenu}>
					<ListFilterList
						filters={filters}
						filterOptions={filterOptions}
						handleFilter={handleFilter}
					/>
				</Sheet>
			</Hidden>
		</>
	)
}

export default SearchFilters
