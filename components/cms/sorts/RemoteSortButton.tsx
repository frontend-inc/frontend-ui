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
    ...rest 
	} = props || {}

  const { loading, fields } = useFetchSort({
    url
  })  
	
	return (
		<SortButton 
      { ...rest }
      loading={loading}
      sortOptions={fields}
    />		
	)
}

export default RemoteSortButton
