import React from 'react'
import MuiTableCell from '@mui/material/TableCell'

type TableCellProps = {
	align?: 'center' | 'left' | 'right'
	children?: React.ReactNode
	header?: boolean
	sticky?: boolean
	small?: boolean
	variant?: 'head' | 'body'
}

const TableCell: React.FC<TableCellProps> = (props) => {
	const {
		align = 'left',
		children,
		header = false,
		sticky = false,
		small = false,
		variant = 'body',
	} = props

	return (
		<MuiTableCell
			variant={variant}
			align={align}
			sx={{
				...sx.root,
				...(small && sx.cellSmall),
				...(sticky && sx.cellSticky),
        ...(header && sticky && sx.cellStickyHeader),
				...(header && sx.cellHeader),
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
		borderBottom: '2px solid',
    borderColor: 'divider',
		zIndex: 1,
		p: 0,
	},
	cellSticky: {
		position: 'sticky',
		left: 0,		    
		zIndex: 2,
	},
	cellStickyHeader: {
		zIndex: 3,    
    borderBottom: '3px solid',
    borderColor: 'divider',
	},
}
