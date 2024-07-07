import React, { useContext } from 'react'
import { useSearch } from '../../../hooks'
import { QueryContext, useAuth } from 'frontend-js'

export type QueryProps = {
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
  children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {

  const { url } = useContext(QueryContext) as any
  const { currentUser } = useAuth()

  const {
		filterUser = false,
		filterTeam = false,
		query = {},
    perPage = 20,
    children
	} = props

  useSearch({
    url,
    user: currentUser,
    perPage,
    filterUser,
    filterTeam,
    query,  
  })

  return children 
}

export default Query
