'use client'

import React, { useRef, useEffect } from 'react'
import { useResourceContext } from 'frontend-js'
import { ApiQuery } from 'frontend-js'

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
		if (defaultQuery && url && mounted.current == false) {
      mounted.current = true 
			findMany(defaultQuery || {})
		}
	}, [defaultQuery, url])

	return children
}

export default DataFetcher
