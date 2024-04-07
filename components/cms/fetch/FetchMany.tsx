import React, { useEffect } from 'react'
import { QueryParamsType, useResourceContext } from 'frontend-js'

type FetchManyProps = {
	url: string
	children: any
	defaultQuery: QueryParamsType
}

const FetchMany: React.FC<FetchManyProps> = (props) => {
	const {
		children,
		url,
		defaultQuery = {
			sort_by: 'id',
			sort_direction: 'desc',
			per_page: 20,
			page: 1,
		},
	} = props

	const { findMany } = useResourceContext({
		url,
	})

	useEffect(() => {
		if (url) {
			findMany(defaultQuery)
		}
	}, [url])

	return children
}

export default FetchMany
