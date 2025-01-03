'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { RemixIcon } from '../../../components'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
	const { page, numPages, handlePaginate } = props

	if (page >= numPages) return null
	return (
		<div className="flex flex-row w-full justify-center items-center">
			<Button
				color="secondary"
				onPress={handlePaginate}
				endContent={<RemixIcon name="ri-arrow-down-line" />}
			>
				Load More
			</Button>
		</div>
	)
}

export default LoadMore
