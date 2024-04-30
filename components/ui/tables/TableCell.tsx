import React from 'react'
import MuiTableCell from '@mui/material/TableCell'

type TableCellProps = {
	align?: 'center' | 'left' | 'right'
	children?: React.ReactNode
	header?: boolean
	sticky?: boolean
	small?: boolean
}

const TableCell: React.FC<TableCellProps> = (props) => {
	const {
		align = 'left',
		children,
		header = false,
		sticky = false,
		small = false,
	} = props

	return (
		<MuiTableCell
			align={align}
			sx={{
				...sx.root,
				...(small && sx.cellSmall),
				...(sticky && sx.cellSticky),
				...(header && sx.cellHeader),
				...(header && sticky && sx.cellStickyHeader),
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
		bgcolor: 'background.default',
		borderBottom: '1px dotted',
		borderRight: '1px dotted',
		borderColor: 'divider',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		whiteSpace: 'nowrap',
		maxWidth: '240px',
	},
	cellSmall: {
		minWidth: '40px',
		width: '40px',
	},
	cellHeader: {
		borderBottom: '3px solid',
		zIndex: 1,
    p: 0,
	},
	cellSticky: {
		position: 'sticky',
		left: 0,
		borderRight: '3px solid',
		zIndex: 2,
	},
	cellStickyHeader: {
		zIndex: 3,
	},
}
