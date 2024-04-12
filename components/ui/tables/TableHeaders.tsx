import React from 'react'
import { Checkbox, TableHead, TableRow } from '@mui/material'
import { CellHeader, TableCell } from '../../../components'

type TableHeaderProps = {
	sortBy?: string
	sortDirection?: string
	fields: Array<any>
	checked?: boolean
	enableSelect?: boolean
	enableEdit?: boolean
	handleSort: (e: any) => void
	handleSelectAll?: (e: any) => void
}

const TableHeaders: React.FC<TableHeaderProps> = (props) => {
	const {
		fields,
		checked,
		sortBy = 'id',
		sortDirection = 'asc',
		enableSelect = false,
		enableEdit = false,
		handleSort,
		handleSelectAll,
	} = props

	return (
		<TableHead>
			<TableRow>
				{enableSelect && (
					<TableCell 
            sticky 
            header
            small
          >
						<Checkbox
							checked={checked}
							onChange={handleSelectAll}
							value="true"
						/>
					</TableCell>
				)}
				{enableEdit && (
          <TableCell 
            header 
            small
          />
        )}
				{fields?.map((field, index) => (
					<TableCell header key={index}>
						<CellHeader
							field={field}
							sortBy={sortBy}
							sortDirection={sortDirection}
							handleSort={handleSort}
						/>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

export default TableHeaders
