import React, { useState } from 'react'
import { Box, TableBody } from '@mui/material'
import {
	TableContainer,
	TableHeaders,
	TableToolbar,
	TableRow,
	Pagination,
	FilterPopup,
} from '../../../components'
import { useSelected } from '../../../hooks'

type TableProps = {
	loading: boolean
	fields: Array<any>
	rows: Array<any>
	enableBorder?: boolean
	enableSearch?: boolean
	enableFilters?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	handleClick?: (item: any) => void
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
	handleQueryChange?: (e: any) => void
	handleKeywordChange?: (e: any) => void
	handleClearQuery?: () => void
	handlePaginate?: (e: any, page: number) => void
	handleSearch?: (keywords: any) => void
	handleKeywordSearch?: (keywords: string) => void
	handleSort?: (e: any) => void
	styles?: any
}

const Table: React.FC<TableProps> = (props) => {
	const [showFilters, setShowFilters] = useState(false)

	const {
		loading,
		enableBorder = true,

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
		numPages = 1,
		totalCount = 0,
		handlePaginate,
		styles = {},
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
		<Box
			sx={sx.root}
		>
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
			<TableContainer styles={styles}>
				<TableHeaders
					enableEdit={enableEdit}
					enableSelect={enableSelect}
					fields={fields}
					sortBy={query?.sort_by}
					sortDirection={query?.sort_direction}
					checked={selected?.length > 0 && selected?.length === rows?.length}
					handleSort={handleSort}
					handleSelectAll={handleSelectAll}
				/>
				<TableBody>
					{rows?.map((row) => (
						<TableRow
							key={row?.id}
							row={row}
							fields={fields}
							selectedIds={selectedIds}
							enableSelect={enableSelect}
							enableEdit={enableEdit}
							handleClick={handleClick}
							handleEdit={handleEdit}
							handleSelect={handleSelect}
						/>
					))}
				</TableBody>
			</TableContainer>
			<Pagination
				page={page}
				numPages={numPages}
				totalCount={totalCount}
				loading={loading}
				handlePaginate={handlePaginate}
			/>
			<FilterPopup
				open={showFilters}
				anchorEl={anchorEl}
				query={query}
				handleClose={() => setShowFilters(false)}
				fields={fields}
				handleSearch={handleSearch}
				handleChange={handleQueryChange}
				handleClearFilters={handleClearQuery}
			/>
		</Box>
	)
}

export default Table

const sx = {
	root: {
		bgcolor: 'background.paper',
		borderRadius: (theme) => theme.shape.borderRadius,
		border: '1px solid',
		borderColor: 'divider',
	},
}
