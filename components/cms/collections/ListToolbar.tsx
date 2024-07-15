import React, { useEffect } from 'react'
import {
	SearchToolbar,
} from '../..'
import { useFields } from '../../../hooks'

export type ListToolbarProps = {
	query: any
	url: string
	filterUser: boolean
	filterTeam: boolean
	perPage: number
	enableSearch?: boolean
	enableGeoSearch?: boolean
	enableCreate?: boolean
  enableFilters?: boolean
  enableSorting?: boolean
	handleAdd?: () => void
}

const ListToolbar: React.FC<ListToolbarProps> = (props) => {
	
	return (
    <SearchToolbar 
      { ...props }
      fetchRemoteFilters 
      fetchRemoteSorts
    />		
	)
}

export default ListToolbar
