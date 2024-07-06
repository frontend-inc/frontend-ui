import React from 'react'
import { useSearch } from '../../../hooks'
import { UserType, useAuth } from 'frontend-js'

export type QueryProps = {
	url: string
	perPage?: number
	query?: any
	filterUser?: boolean
	filterTeam?: boolean
  children: React.ReactNode
}

const Query: React.FC<QueryProps> = (props) => {

  const { currentUser } = useAuth()

  const {
		url,
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
