'use client'

import React from 'react'
import { Cell, TableCell } from '../../../components'
import { Button, Checkbox } from '../../core'
import { get } from 'lodash'
import { TableRow as ShadcnTableRow } from 'frontend-shadcn'

type TableRowProps = {
	row: any
	fields: Array<any>
	enableEdit?: boolean
	enableDelete?: boolean
	enableShow?: boolean
	enableSelect?: boolean
	selectedIds?: Array<any>
	handleClick?: (value: any, row: any, field: any) => void
	handleShow?: (resource: any) => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	handleSelect?: (item: any) => void
}

const TableRow: React.FC<TableRowProps> = (props) => {
	const {
		row,
		fields,
		enableEdit = false,
		enableDelete = false,
		enableShow = false,
		enableSelect = false,
		handleClick,
		handleEdit,
		handleDelete,
		handleShow,
		selectedIds,
		handleSelect,
	} = props

	const selected = selectedIds?.includes(row?.id) ? true : false

	return (
		<ShadcnTableRow>
			{enableSelect && (
				<TableCell small sticky>
					<div className="mx-2">
						<Checkbox
							name={`select-${row.id}`}
							value={selected}
							//@ts-ignore
							handleChange={handleSelect ? () => handleSelect(row) : undefined}
						/>
					</div>
				</TableCell>
			)}
			{(enableEdit || enableDelete) && (
				<TableCell small>
					<div className="flex flex-row space-x-1">
						{enableShow && (
							<Button
								size="sm"
								color="secondary"
								onClick={handleShow ? () => handleShow(row) : undefined}
							>
								View
							</Button>
						)}
						{enableEdit && (
							<Button
								size="sm"
								variant="secondary"
								onClick={handleEdit ? () => handleEdit(row) : undefined}
							>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button
								size="sm"
								variant="secondary"
								onClick={handleDelete ? () => handleDelete(row) : undefined}
							>
								Delete
							</Button>
						)}
					</div>
				</TableCell>
			)}
			{fields?.map((field, index) => {
				let value = get(row, field.name)
				return (
					<TableCell key={index}>
						<Cell
							row={row}
							field={field}
							value={value}
							handleClick={
								handleClick ? () => handleClick(value, row, field) : undefined
							}
						/>
					</TableCell>
				)
			})}
		</ShadcnTableRow>
	)
}

export default TableRow
