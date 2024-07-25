import React, { useEffect, useContext } from 'react'
import { useQueryContext, ResourceContext } from 'frontend-js'

export type QueryProps = {
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
	filterReferences?: boolean
	children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {
	const { query, setQuery, url } = useContext(ResourceContext) as any
	const { query: defaultQuery = {}, children } = props
  
  useEffect(() => {
    setQuery(defaultQuery)
  }, [defaultQuery])

  useQueryContext({
    url,
    query, 
  })	

	return children
}

export default Query
