'use client'

import React from 'react'
import { Typography } from '../../../components'
import { TableHeaders, Empty } from '../../../components'
import { Table, TableRow, TableHeader, TableBody } from 'frontend-shadcn'
import { cn } from '@nextui-org/react'

type TableProps = {
	title?: string
	loading: boolean
	headers: any[]
	resources: any[]
	toolbar?: React.ReactNode
	disableBorderRadius?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableShow?: boolean
	handleClick?: (value: any, row: any, field: any) => void
	handleShow?: (resource: any) => void
	handleEdit?: (resource: any) => void
	handleDelete?: (resource: any) => void
	page?: number
	perPage?: number
	numPages?: number
	totalCount?: number
	query: any
	selected?: any
	selectedIds?: any
	handleSelect?: (row: any) => void
	handleSelectAll: () => void
	handleSort: (field: any) => void
	handlePaginate: (page: number) => void
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const TableList: React.FC<TableProps> = (props) => {
	const {
		title,
		toolbar,
		loading,
		headers,
		resources,
		disableBorderRadius,
		enableSelect = false,
		enableEdit = false,
		enableDelete = false,
		enableShow = false,
		handleClick,
		handleEdit,
		handleDelete,
		handleShow,
		query,
		selected,
		selectedIds,
		handleSelect,
		handleSelectAll,
		handleSort,
		handlePaginate,
		page,
		perPage,
		numPages,
		totalCount,
		emptyIcon = 'Search',
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
	} = props

	return (
		<div
			className={cn(
				'w-full',
				!disableBorderRadius && 'rounded-lg overflow-hidden'
			)}
		>
			{(title || toolbar) && (
				<div className="p-2 min-h-[40px] w-full">
					{title && <Typography variant="subtitle1">{title}</Typography>}
					{toolbar && toolbar}
				</div>
			)}
			<Table className="scrollbar-hide">
				<TableHeader>
					<TableHeaders
						enableEdit={enableEdit}
						enableSelect={enableSelect}
						enableDelete={enableDelete}
						enableShow={enableShow}
						fields={headers}
						sortBy={query?.sort_by}
						sortDirection={query?.sort_direction}
						checked={
							selected?.length > 0 && selected?.length === resources?.length
						}
						handleSort={handleSort}
						handleSelectAll={handleSelectAll}
					/>
				</TableHeader>
				<TableBody>
					{resources?.map((row) => (
						<TableRow
							key={row?.id}
							row={row}
							fields={headers}
							selectedIds={selectedIds}
							enableSelect={enableSelect}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							enableShow={enableShow}
							handleClick={handleClick}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
							handleShow={handleShow}
							handleSelect={handleSelect}
						/>
					))}
				</TableBody>
			</Table>
			{!loading && resources?.length == 0 && (
				<div className="py-12 px-4 w-full h-full flex flex-row items-center justify-center">
					<Empty
						icon={emptyIcon}
						title={emptyTitle}
						description={emptyDescription}
					/>
				</div>
			)}
		</div>
	)
}

export default TableList
