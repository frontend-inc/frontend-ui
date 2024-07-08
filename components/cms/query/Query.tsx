import React, { useEffect, useContext } from 'react'
import { useSearch } from '../../../hooks'
import { QueryContext } from 'frontend-js'

export type QueryProps = {
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
  filterRelated?: boolean
  children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {

  const { url } = useContext(QueryContext) as any

  const {
    query = {},
    perPage = 20,
    children
	} = props

  const { 
    handleSearch 
  } = useSearch({
    url,
    perPage,
    query,  
  })

  useEffect(() => {
    if(url && query){
      handleSearch()
    }
  }, [url, query])

  return children 
}

export default Query
