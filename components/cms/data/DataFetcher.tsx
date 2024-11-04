'use client'

import React, { useEffect } from 'react'
import { useResourceContext } from 'frontend-js'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query } = props

	const { url, findMany } = useResourceContext()

	useEffect(() => {
		if (query && url) {
			findMany(query)
		}
	}, [query, url])

	return children
}

export default DataFetcher
