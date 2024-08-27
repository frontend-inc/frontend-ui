import React, { useState, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'
import useSWR from 'swr'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query } = props

	const { findMany } = useResourceContext()

	useEffect(() => {
		if (query) {
			findMany(query)
		}
	}, [query])

	return children
}

export default DataFetcher
