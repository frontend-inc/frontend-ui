import React, { useState } from 'react'
import { TableList, TableToolbar, TableFilterPopup } from '../../../components'
import { useSelected } from '../../../hooks'

type TableProps = {
	loading: boolean
	fields: Array<any>
	rows: Array<any>
	enableSearch?: boolean
	enableFilters?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick: (value: any, row: any, field: any) => void
	handleEdit?: (row: any) => void
	handleEditSelected?: (items: any[]) => void
	handleDelete?: (items: any[]) => void
	handlePublish?: (items: any[]) => void
	handleUnpublish?: (items: any[]) => void
	secondaryActions?: React.ReactNode
	page?: number
	perPage?: number
	numPages?: number
	totalCount?: number
	query: any
	handleQueryChange: (e: any) => void
	handleClearQuery: () => void
	handlePaginate: (e: any, page: number) => void
	handleSearch: (keywords: any) => void
	handleKeywordSearch: (keywords: string) => void
	handleSort: (field: any) => void
	disableBorderRadius?: boolean
	styles?: any
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const Table: React.FC<TableProps> = (props) => {
	const [showFilters, setShowFilters] = useState(false)

	const {
		loading,
		fields,
		rows,
		enableSelect = false,
		enableEdit = false,
		enableDelete = false,
		handleClick,
		handleEdit,
		handleEditSelected,
		handleDelete,

		handlePublish,
		handleUnpublish,
		secondaryActions,

		query,
		handleClearQuery,
		handleQueryChange,
		handleSearch,
		handleKeywordSearch,
		handleSort,

		page = 1,
		perPage = 10,
		numPages,
		totalCount,
		handlePaginate,
		disableBorderRadius = false,
		styles = {},
		emptyIcon,
		emptyTitle,
		emptyDescription,
	} = props

	const handleKeywordChange = (e: any) => {
		handleQueryChange({
			target: {
				name: 'keywords',
				value: e.target.value,
			},
		})
	}

	const { selected, selectedIds, setSelected, setSelectedIds, handleSelect } =
		useSelected()

	const [anchorEl, setAnchorEl] = useState(null)

	const handleFilterClick = (ev) => {
		setAnchorEl(ev.currentTarget)
		setShowFilters(true)
	}

	const handleSelectAll = () => {
		if (selected?.length === rows?.length) {
			setSelected([])
			setSelectedIds([])
		} else {
			setSelected(rows)
			setSelectedIds(rows.map((r) => r.id))
		}
	}

	return (
		<>
			<TableList
				loading={loading}
				disableBorderRadius={disableBorderRadius}
				query={query}
				toolbar={
					<TableToolbar
						loading={loading}
						query={query}
						selected={selected}
						handleKeywordSearch={handleKeywordSearch}
						handleKeywordChange={handleKeywordChange}
						handleFilter={handleFilterClick}
						handleClearQuery={handleClearQuery}
						enableEdit={enableEdit}
						enableDelete={enableDelete}
						handleDelete={handleDelete}
						handleEdit={handleEditSelected}
						handlePublish={handlePublish}
						handleUnpublish={handleUnpublish}
						secondaryActions={secondaryActions}
					/>
				}
				fields={fields}
				resources={rows}
				enableEdit={enableEdit}
				enableSelect={enableSelect}
				selected={selected}
				selectedIds={selectedIds}
				handleClick={handleClick}
				handleEdit={handleEdit}
				handleSelect={handleSelect}
				handleSort={handleSort}
				handleSelectAll={handleSelectAll}
				page={page}
				perPage={perPage}
				numPages={numPages}
				totalCount={totalCount}
				handlePaginate={handlePaginate}
				emptyIcon={emptyIcon}
				emptyTitle={emptyTitle}
				emptyDescription={emptyDescription}
				styles={styles}
			/>
			<TableFilterPopup
				open={showFilters}
				anchorEl={anchorEl}
				query={query}
				handleClose={() => setShowFilters(false)}
				fields={fields}
				handleSearch={handleSearch}
				handleChange={handleQueryChange}
				handleClearFilters={handleClearQuery}
			/>
		</>
	)
}

export default Table
