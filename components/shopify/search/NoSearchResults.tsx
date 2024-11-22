'use client'

import React from 'react'
import { Alert } from '../../../components'

const NoSearchResults: React.FC = () => {
	return (
		<div className="flex flex-row w-full justify-center">
			<Alert
				icon="ri-search-line"
				title="No search results"
				description="Please try another query."
			/>
		</div>
	)
}

export default NoSearchResults
