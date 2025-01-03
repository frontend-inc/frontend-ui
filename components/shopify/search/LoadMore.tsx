'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@nextui-org/react'

type LoadMoreProps = {
	loading?: boolean
	hasNextPage?: boolean
	handleSearch?: () => void
}

export default function LoadMore(props: LoadMoreProps) {
	const { loading = false, hasNextPage = false, handleSearch } = props

	if (!hasNextPage) return null

	return (
		<div className="flex justify-center w-full">
			<Button
				isLoading={loading}
				variant="solid"
				onPress={handleSearch}
				disabled={loading}
				endContent={<ChevronDown className="h-4 w-4" />}
			>
				Load More
			</Button>
		</div>
	)
}
