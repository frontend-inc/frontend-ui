import React, { useEffect, useContext } from 'react'
import { useQueryContext, ResourceContext } from 'frontend-js'

export type QueryProps = {
	query?: any
  loadMore?: boolean
	children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {
	
  const { children, query: defaultQuery={}, loadMore = false } = props
  const { setQuery } = useContext(ResourceContext) as any

  useQueryContext({
    loadMore
  })	

  useEffect(() => {
    if(defaultQuery){
      setQuery(defaultQuery)
    }
  }, [defaultQuery])

	return children
}

export default Query
