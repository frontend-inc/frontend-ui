import React from 'react'
import { Drawer } from '../../../components'
import FilterForm from './FilterForm'

type FilterDrawerProps = {
	open: boolean
	query: any
	handleClose: () => void
	fields: any[]
	handleSearch: (keywords: any) => void
	handleChange: (e: any) => void
	handleClearFilters: () => void
}

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
	const {
		open,
		query,
		handleClose,
		fields,
		handleSearch,
		handleChange,
		handleClearFilters,
	} = props

	return (
		<Drawer open={open} handleClose={handleClose} title="search">
			<FilterForm
				query={query}
				fields={fields}
				handleSearch={handleSearch}
				handleChange={handleChange}
				handleClearFilters={handleClearFilters}
			/>
		</Drawer>
	)
}

export default FilterDrawer
