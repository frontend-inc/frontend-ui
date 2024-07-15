import React from 'react'
import { useFetchFilters } from '../../../hooks'
import { FilterOptionType } from '../../..'
import { FilterButton } from '../../../components'

type RemoteFilterButtonProps = {
  url: string 
	filters?: FilterOptionType[]
	disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const RemoteFilterButton: React.FC<RemoteFilterButtonProps> = (props) => {
	const {
    url, 
    ...rest 
	} = props || {}

  const { loading, fields } = useFetchFilters({
    url
  })
	
	return (
		<FilterButton 
      { ...rest }
      loading={loading}
      filterOptions={fields}
    />		
	)
}

export default RemoteFilterButton
