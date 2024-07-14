import React, { useEffect, useContext } from 'react'
import { useSearch } from '../../../hooks'
import { ResourceContext } from 'frontend-js'

export type QueryProps = {
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
	filterRelated?: boolean
	children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {
	const { url } = useContext(ResourceContext) as any

	const { query = {}, children } = props

	const { handleSearch } = useSearch({
		url,
		query,
	})

	useEffect(() => {
		if (url) {
			handleSearch(query?.keywords, query?.location)
		}
	}, [url])

	return children
}

export default Query
