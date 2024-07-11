import React, { useEffect, useContext } from 'react'
import { useSearch } from '../../../hooks'
import { CollectionContext } from 'frontend-js'

export type QueryProps = {
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
	filterRelated?: boolean
	children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {
	const { url } = useContext(CollectionContext) as any

	const { query = {}, perPage = 12, children } = props

	const { handleSearch } = useSearch({
		url,
		perPage,
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
