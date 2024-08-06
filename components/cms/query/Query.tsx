import React, { useEffect, useContext } from 'react'
import { useQueryContext, ResourceContext } from 'frontend-js'

export type QueryProps = {
	query?: any
	children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {
	const { children, query: defaultQuery = {} } = props
	const { setQuery } = useContext(ResourceContext) as any

	useQueryContext()

	useEffect(() => {
		if (defaultQuery) {
			setQuery(defaultQuery)
		}
	}, [defaultQuery])

	return children
}

export default Query
