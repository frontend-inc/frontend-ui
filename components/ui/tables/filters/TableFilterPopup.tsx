import React from 'react'
import { Popup } from '../../..'
import TableFilterForm from './TableFilterForm'

type TableFilterPopupProps = {
	open: boolean
	anchorEl: any
	query: any
	handleClose: () => void
	fields: any[]
	handleSearch: (keywords: any) => void
	handleChange: (e: any) => void
	handleClearFilters: () => void
}

const TableFilterPopup: React.FC<TableFilterPopupProps> = (props) => {
	const {
		open,
		anchorEl,
		query,
		handleClose,
		fields,
		handleSearch,
		handleChange,
		handleClearFilters,
	} = props

	return (
		<Popup anchorEl={anchorEl} open={open} handleClose={handleClose}>
			<TableFilterForm
				query={query}
				fields={fields}
				handleSearch={handleSearch}
				handleChange={handleChange}
				handleClearFilters={handleClearFilters}
			/>
		</Popup>
	)
}

export default TableFilterPopup
