'use client'

import React, { useRef, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query: defaultQuery } = props

	const { 
    url, 
    query,
    findMany 
  } = useResourceContext()

  const mounted = useRef(false)

	useEffect(() => {        
		if (JSON.stringify(defaultQuery) !== JSON.stringify(query)) {
			findMany(defaultQuery || {})
		}
	}, [defaultQuery])

	return children
}

export default DataFetcher
