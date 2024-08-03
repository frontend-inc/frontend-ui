import React from 'react'
import { Stack, Button, Checkbox, TableRow as MuiTableRow } from '@mui/material'
import { Cell, TableCell } from '../../../components'
import { get } from 'lodash'

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
		<MuiTableRow 
      sx={sx.root} 
      selected={selected}
    >
			{enableSelect && (
				<TableCell small align={'center'} sticky>
					<Checkbox
						checked={selected}
						onChange={handleSelect ? () => handleSelect(row) : undefined}
						value="true"
					/>
				</TableCell>
			)}
			{(enableEdit || enableDelete) && (
				<TableCell small align="center">
					<Stack direction="row" spacing={1}>
            {enableShow && (
							<Button
								size="small"
								variant="contained"
								color="secondary"
								onClick={handleShow ? () => handleShow(row) : undefined}
							>
								View
							</Button>
						)}
						{enableEdit && (
							<Button
								size="small"
								variant="contained"
								color="secondary"
								onClick={handleEdit ? () => handleEdit(row) : undefined}
							>
								Edit
							</Button>
						)}
						{enableDelete && (
							<Button
								size="small"
								variant="contained"
								color="secondary"
								onClick={handleDelete ? () => handleDelete(row) : undefined}
							>
								Delete
							</Button>
						)}
					</Stack>
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
							handleClick={handleClick ? () => handleClick(value, row, field) : undefined}
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
		'&:hover .MuiTableCell-root': {
			bgcolor: 'secondary.main',
		},
	},
	editIcon: {
		height: '20px',
		width: '20px',
	},
}
