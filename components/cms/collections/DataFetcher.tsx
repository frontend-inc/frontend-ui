import React, { useEffect, useContext } from 'react'
import { useQueryContext, ResourceContext } from 'frontend-js'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query: defaultDataFetcher = {} } = props
	const { setDataFetcher } = useContext(ResourceContext) as any

	useQueryContext()

	useEffect(() => {
		if (defaultDataFetcher) {
			setDataFetcher(defaultDataFetcher)
		}
	}, [defaultDataFetcher])

	return children
}

export default DataFetcher
