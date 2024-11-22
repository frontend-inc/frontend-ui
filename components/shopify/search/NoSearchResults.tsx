'use client'

import React from 'react'
import { Empty } from '../../../components'

const NoSearchResults: React.FC = () => {
	return (
		<div className="flex flex-row w-full justify-center">
			<Empty
				icon="ri-search-line"
				title="No search results"
				description="Please try another query."
			/>
		</div>
	)
}

export default NoSearchResults
