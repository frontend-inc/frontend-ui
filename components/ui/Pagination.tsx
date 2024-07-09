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
	perPage?: number
	numPages?: number
	handlePaginate: (event: React.ChangeEvent<unknown>, page: number) => void
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const {
		loading,
		totalCount = 0,
		page = 1,
		numPages = 1,
		perPage = 10,
		handlePaginate,
	} = props

	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(0)

	const [pageNumber, setPageNumber] = useState(page)

	const handleChangePage = (event, nextPage) => {
		setPageNumber(nextPage)
		handlePaginate(event, nextPage)
	}

	useEffect(() => {
		if (page && numPages && totalCount && perPage) {
			let start = (page - 1) * perPage + 1
			setStartIndex(start)
			setEndIndex(start + totalCount - 1)
		}
	}, [page, numPages, totalCount])

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
