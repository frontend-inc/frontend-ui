import React from 'react'
import { Skeleton } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

type TableRowSkeletonProps = {
	numRows?: number
	numColumns?: number
}

const TableRowSkeleton: React.FC<TableRowSkeletonProps> = (props) => {
	const { numRows = 10, numColumns = 6 } = props

	let rows = new Array(numRows).fill(0)
	let cells = new Array(numColumns).fill(0)

	return (
		<Table>
			<TableHead>
				<TableRow>
					{cells.map((cell, i) => (
						<TableCell key={i}>
							<Skeleton
								height={14}
								sx={sx.skeleton}
								variant="rectangular"
								animation="wave"
							/>
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row, i) => (
					<TableRow key={i}>
						{cells.map((cell, j) => (
							<TableCell sx={sx.tableCell} key={j}>
								<Skeleton
									height={14}
									sx={sx.skeleton}
									variant="rectangular"
									animation="wave"
								/>
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default TableRowSkeleton

const sx = {
	root: {
		width: '100%',
		height: {
			xs: 'calc(100vh - 200px)',
			sm: 'calc(100vh - 160px)',
		},
	},
	tableCell: {
		p: 1,
	},
	skeleton: {
		m: 0.5,
		opacity: 0.1,
		borderRadius: 1,
		bgcolor: 'text.secondary',
	},
}
