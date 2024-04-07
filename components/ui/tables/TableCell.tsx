import React from 'react'
import MuiTableCell from '@mui/material/TableCell'

type TableCellProps = {
	align?: 'center' | 'left' | 'right'
	children?: React.ReactNode
	header?: boolean
	sticky?: boolean
}

const TableCell: React.FC<TableCellProps> = (props) => {
	const { align = 'left', children, header = false, sticky = false } = props

	return (
		<MuiTableCell
			align={align}
			sx={{
				...sx.root,
				...(header && sx.header),
				...(sticky && sx.stickyCell),
				...(header && sticky && sx.stickyHeader),
			}}
		>
			{children}
		</MuiTableCell>
	)
}

export default TableCell

const sx = {
	root: {
		px: 1,
		minWidth: '100px',
		bgcolor: 'background.paper',
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	header: {
		p: 0,
		whiteSpace: 'nowrap',
	},
	stickyHeader: {
		position: 'sticky',
		left: 0,
		minWidth: 40,
		zIndex: (theme) => theme.zIndex.modal - 1,
	},
	stickyCell: {
		zIndex: (theme) => theme.zIndex.modal - 2,
		position: 'sticky',
		left: 0,
		minWidth: 40,
	},
}
