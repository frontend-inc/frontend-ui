'use client'

import React, { useRef, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'

export type DataFetcherProps = {
	query?: any
	children: React.ReactNode
}

const DataFetcher: React.FC<DataFetcherProps> = (props) => {
	const { children, query } = props

	const { 
    url, 
    findMany 
  } = useResourceContext()

  const mounted = useRef(false)

	useEffect(() => {        
		if (query && url && !mounted.current) {
      mounted.current = true
			findMany(query || {})
		}
	}, [query, url])

	return children
}

export default DataFetcher
