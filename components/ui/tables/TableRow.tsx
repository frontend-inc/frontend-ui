import React from 'react'
import { Stack, Button, Checkbox, TableRow as MuiTableRow } from '@mui/material'
import { Cell, TableCell } from '../../../components'

type TableRowProps = {
	row: any
	fields: Array<any>
	enableEdit?: boolean
  enableDelete?: boolean
	enableSelect?: boolean
	handleClick?: (value: any, row: any, field: any) => void
	handleEdit?: (item: any) => void
  handleDelete?: (item: any) => void
	selectedIds?: Array<any>
	handleSelect?: (item: any) => void
}

const TableRow: React.FC<TableRowProps> = (props) => {
	const {
		row,
		fields,
		enableEdit = false,
    enableDelete = false,
		enableSelect = false,
		handleClick,
		handleEdit,
    handleDelete,
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
			{(enableEdit || enableDelete) && (
				<TableCell small align="center">
          <Stack direction="row" spacing={1}>
          { enableEdit && (
            <Button 
              size='small'
              variant='contained'
              color='secondary'
              onClick={() => handleEdit(row)}
            >
              Edit
            </Button>				
          )}	
          { enableDelete && (
            <Button 
              size='small'
              variant='contained'
              color='secondary'
              onClick={() => handleDelete(row)}
            >
              Delete 
            </Button>				
          )}
          </Stack>
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
