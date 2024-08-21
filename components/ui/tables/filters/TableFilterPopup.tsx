import React from 'react'
import { Popup } from '../../..'
import TableFilterForm from './TableFilterForm'

type TableFilterPopupProps = {
	open: boolean
  loading: boolean
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
    loading,
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
        loading={ loading }
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
