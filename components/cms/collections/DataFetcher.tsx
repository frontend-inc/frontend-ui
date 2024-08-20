import React, { useEffect } from 'react'
import { useQueryContext, useResourceContext } from 'frontend-js'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query: defaultQuery = {} } = props
	const { setQuery } = useResourceContext()

	useQueryContext()

	useEffect(() => {
		if (defaultQuery) {
			setQuery(defaultQuery)
		}
	}, [defaultQuery])

	return children
}

export default DataFetcher
