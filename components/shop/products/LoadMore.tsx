'use client'

import React from 'react'
import { Button } from '../../core'
import { RemixIcon } from '../../../components'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
	enableInfiniteLoad?: boolean
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { page, numPages, handlePaginate, enableInfiniteLoad = false } = props

	if (page >= numPages) return null
	return (
		<div className="flex flex-row w-full justify-center items-center">
			<Button
				color="secondary"
				onClick={handlePaginate}
				endIcon={<RemixIcon name="ri-arrow-down-line" />}
			>
				Load More
			</Button>
		</div>
	)
}

export default LoadMore
