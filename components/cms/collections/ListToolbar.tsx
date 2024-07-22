import React from 'react'
import {
	SearchToolbar,
} from '../..'

export type ListToolbarProps = {
	query: any
	url: string
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
    />		
	)
}

export default ListToolbar
