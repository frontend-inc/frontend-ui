import React from 'react'
import {
	Checkbox,
	IconButton,
	TableCell as MuiTableCell,
	TableRow as MuiTableRow,
} from '@mui/material'
import { Cell, TableCell } from '../../../components'
import { Edit } from '@mui/icons-material'

type TableRowProps = {
	row: any
	fields: Array<any>
	enableEdit?: boolean
	enableSelect?: boolean
	handleClick?: (value: any, row: any, field: any) => void
	handleEdit?: (item: any) => void
	selectedIds?: Array<any>
	handleSelect?: (item: any) => void
}

const TableRow: React.FC<TableRowProps> = (props) => {
	const {
		row,
		fields,
		enableEdit = false,
		enableSelect = false,
		handleClick,
		handleEdit,
		selectedIds,
		handleSelect,
	} = props

	const selected = selectedIds?.includes(row?.id) ? true : false

	return (
		<MuiTableRow sx={sx.root} selected={selected}>
			{enableSelect && (
				<TableCell align={'center'} sticky>
					<Checkbox
						checked={selected}
						onChange={() => handleSelect(row)}
						value="true"
					/>
				</TableCell>
			)}
			{enableEdit && (
				<TableCell align="center">
					<IconButton
						onClick={handleEdit ? () => handleEdit(row) : null}
						size="small"
					>
						<Edit />
					</IconButton>
				</TableCell>
			)}
			{fields?.map((field, index) => {
				let value = row[field.name]
				return (
					<TableCell key={index}>
						<Cell
							row={row}
							field={field}
							value={value}
							handleClick={
								handleClick ? () => handleClick(value, row, field) : null
							}
						/>
					</TableCell>
				)
			})}
		</MuiTableRow>
	)
}

export default TableRow

const sx = {
	root: {
		height: '50px',
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	editIcon: {
		height: '20px',
		width: '20px',
	},
}
