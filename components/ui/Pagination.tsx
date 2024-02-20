import React, { useState, useEffect } from 'react'
import {
	Box,
	Hidden,
	CircularProgress,
	Typography,
	Pagination as MuiPagination,
} from '@mui/material'

type PaginationProps = {
	loading?: boolean
	totalCount?: number
	startIndex?: number
	endIndex?: number
	page?: number
	numPages?: number
	handlePaginate: (event: React.ChangeEvent<unknown>, page: number) => void
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const {
		loading,
		totalCount = 0,
		startIndex = 1,
		endIndex = 1,
		page = 1,
		numPages,
		handlePaginate,
	} = props

	const [pageNumber, setPageNumber] = useState(page)

	const handleChangePage = (event, nextPage) => {
		setPageNumber(nextPage)
		handlePaginate(event, nextPage)
	}

	return (
		<Box sx={sx.pagination}>
			<Hidden smDown>
				<Box mx={2}>
					{loading ? (
						<CircularProgress size={24} />
					) : (
						<Typography variant="body2" color="textSecondary">
							Results {startIndex} - {endIndex} of {totalCount}
						</Typography>
					)}
				</Box>
			</Hidden>
			<MuiPagination
				count={numPages}
				page={pageNumber}
				defaultPage={1}
				onChange={handleChangePage}
				color="primary"
				shape="rounded"
			/>
		</Box>
	)
}

export default Pagination

const sx = {
	pagination: {
		pt: 1,
		pb: 1,
		mb: 2,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderTop: '1px solid',
		borderColor: 'divider',
		width: '100%',
	},
	button: {
		color: 'text.secondary',
	},
}
