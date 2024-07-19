import React from 'react'
import { useFetchSort } from '../../../hooks'
import { SortOptionType } from '../../..'
import { SortButton } from '../../../components'

type RemoteSortButtonProps = {
  url: string 	
	sortBy: string
	sortDirection: 'asc' | 'desc'
	handleSortBy: (field: SortOptionType) => void
	handleSortDirection: (sortDirection: 'asc' | 'desc') => void
}

const RemoteSortButton: React.FC<RemoteSortButtonProps> = (props) => {
	const {
    url, 
    sortBy,
    sortDirection,
    handleSortBy,
    handleSortDirection,
	} = props || {}

  const { loading, fields } = useFetchSort({
    url
  })  
	
	return (
		<SortButton       
      loading={loading}
      sortOptions={fields}
      sortBy={sortBy}
      sortDirection={sortDirection}
      handleSortBy={handleSortBy}
      handleSortDirection={handleSortDirection}
    />		
	)
}

export default RemoteSortButton
