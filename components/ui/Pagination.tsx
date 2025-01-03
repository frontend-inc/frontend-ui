'use client'

import React, { useEffect, useState } from 'react'
import { Button, Pagination as NextUIPagination } from '@nextui-org/react'
import { Loader2 } from 'lucide-react'

type PaginationProps = {
	loading?: boolean
	totalCount?: number
	startIndex?: number
	endIndex?: number
	page?: number
	perPage?: number
	numPages?: number
	handlePaginate: (page: number) => void
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

	const handleChangePage = (nextPage: number) => {
		handlePaginate(nextPage)
	}

	useEffect(() => {
		if (page && numPages && totalCount && perPage) {
			const start = (page - 1) * perPage + 1
			setStartIndex(start)
			setEndIndex(Math.min(start + perPage - 1, totalCount))
		}
	}, [page, numPages, totalCount, perPage])

	return (
		<div className="p-2 flex flex-row justify-between items-center border-t border-divider w-full">
			<div className="hidden sm:block mx-2">
				{loading ? (
					<Loader2 className="h-6 w-6 animate-spin text-primary" />
				) : (
					<p className="text-sm text-foreground/70">
						Results {startIndex} - {endIndex} of {totalCount}
					</p>
				)}
			</div>
			<div>
				<NextUIPagination
					total={numPages}
					initialPage={page}
					onChange={(page) => handleChangePage(page)}
					disabled={loading}
				/>
			</div>
		</div>
	)
}

export default Pagination
