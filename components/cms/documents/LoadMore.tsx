'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { ChevronDown } from 'lucide-react'

type LoadMoreProps = {
	page: number
	numPages: number
	handlePaginate: () => void
}

export default function LoadMore(props: LoadMoreProps) {
	const { page, numPages, handlePaginate } = props

	return (
		<div className="w-full flex justify-center items-center p-2">
			{page < numPages && (
				<Button
					variant="ghost"
					onPress={handlePaginate}
					className="flex items-center"
					endContent={<ChevronDown className="h-5 w-5" />}
				>
					Load More
				</Button>
			)}
		</div>
	)
}
