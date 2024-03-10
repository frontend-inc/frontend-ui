import React from 'react'
import FilterList from './FilterList'
import { FilterOption } from '../../../../types'

type FilterButtonProps = {
	field?: any
	filters?: FetchOptionType[]
	handleFilter: (filter: FetchOptionType) => void
}

const FilterField: React.FC<FilterButtonProps> = (props) => {
	const { field, filters = [], handleFilter } = props || {}

	const findFilterValues = (fieldName, filters) => {
		let _filters = filters.filter((f) => f.field == fieldName)
		return _filters.map((f) => f.value)
	}

	return (
		<>
			{field.variant == 'select' && (
				<FilterList
					name={field?.name}
					where={'OR'}
					operator={'in'}
					label={field?.label}
					values={findFilterValues(field?.name, filters)}
					options={field.options?.map((option) => ({
						label: option,
						value: option,
					}))}
					handleClick={handleFilter}
				/>
			)}

			{field.variant == 'boolean' && (
				<FilterList
					name={field?.name}
					label={field?.label}
					where={'AND'}
					operator={'eq'}
					values={findFilterValues(field?.name, filters)}
					options={[{ label: 'Yes', value: true }]}
					handleClick={handleFilter}
				/>
			)}
		</>
	)
}

export default FilterField
