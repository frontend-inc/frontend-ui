import React from 'react'
import { 
  FilterOptionType, 
  SearchFilterOptionType 
} from '../../../../types'
import CheckboxFilter from './CheckboxFilter'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'

type FilterButtonProps = {
	filters: FilterOptionType[]
  filterOption: SearchFilterOptionType
	handleFilter: (filter: FilterOptionType) => void
}

const FilterInput: React.FC<FilterButtonProps> = (props) => {
	const { filterOption, filters = [], handleFilter } = props || {}

	const findFilterValues = (fieldName, filters) => {
		let _filters = filters.filter((f) => f.field == fieldName)
		return _filters.map((f) => f.value)
	}

	return (
		<>
			{filterOption.variant == 'multi_select' && (
				<CheckboxFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					options={filterOption.options?.map((option) => ({
						label: option,
						value: option,
					}))}
					handleClick={handleFilter}
				/>
			)}

      {filterOption.variant == 'number_range' && (
				<CheckboxNumberRangeFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					options={filterOption.options?.map((option) => ({
						min: option.min,
						max: option.max,
					}))}
					handleClick={handleFilter}
				/>
			)}
		</>
	)
}

export default FilterInput
