import React from 'react'
import { useFetchFilters } from '../../../hooks'
import { FilterOptionType } from '../../..'
import { FilterButton } from '../../../components'
import { FilterButtonProps } from './FilterButton'

type RemoteFilterButtonProps = FilterButtonProps & {
	url: string
	filters?: FilterOptionType[]
	disableFilterCount?: boolean
	handleFilter: (filter: FilterOptionType) => void
	handleClear: () => void
}

const RemoteFilterButton: React.FC<RemoteFilterButtonProps> = (props) => {
	const {
		url,
		disableFilterCount = false,
		handleFilter,
		handleClear,
	} = props || {}

	const { loading, fields } = useFetchFilters({
		url,
	})

	return (
		<FilterButton
			loading={loading}
			disableFilterCount={disableFilterCount}
			handleFilter={handleFilter}
			handleClear={handleClear}
			filterOptions={fields}
		/>
	)
}

export default RemoteFilterButton
