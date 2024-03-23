import React from 'react'
import CollectionFilterListInput from './CollectionFilterListInput'
import { Stack } from '@mui/material'

type CollectionFilterListProps = {
	filters: any
	filterOptions: any
	handleFilter: any
}

const CollectionFilterList: React.FC<CollectionFilterListProps> = (props) => {
	const { filters = [], filterOptions = [], handleFilter } = props || {}

	return (
		<Stack spacing={0}>
			{filterOptions?.map((filterOption, index) => (
				<CollectionFilterListInput
					key={index}
					filters={filters}
					filterOption={filterOption}
					handleFilter={handleFilter}
				/>
			))}
		</Stack>
	)
}

export default CollectionFilterList
