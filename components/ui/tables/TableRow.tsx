import React from 'react'
import { Checkbox, IconButton, TableRow as MuiTableRow } from '@mui/material'
import { Icon, Cell, TableCell } from '../../../components'

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
				<TableCell small align={'center'} sticky>
					<Checkbox
						checked={selected}
						onChange={() => handleSelect(row)}
						value="true"
					/>
				</TableCell>
			)}
			{enableEdit && (
				<TableCell small align="center">
					<IconButton onClick={() => handleEdit(row)} size="small">
						<Icon name="Edit" size={20} />
					</IconButton>
				</TableCell>
			)}
			{fields?.map((field, index) => {
				let value = row[field.name]
        if(field?.name == 'user'){
         console.log('value', field?.name, row)
        }
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
