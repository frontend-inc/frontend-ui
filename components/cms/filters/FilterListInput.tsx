import React from 'react'
import { FilterOptionType, SearchFilterOptionType } from '../../../types'
import CheckboxFilter from './CheckboxFilter'
import CheckboxBooleanFilter from './CheckboxBooleanFilter'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'
import CheckboxRatingsFilter from './CheckboxRatingsFilter'
import CheckboxDatesPastFilter from './CheckboxDatesPastFilter'
import CheckboxDatesFutureFilter from './CheckboxDatesFutureFilter'

type FilterListInputProps = {
	filters: FilterOptionType[]
	filterOption: SearchFilterOptionType
	handleFilter: (filter: FilterOptionType) => void
}

const FilterListInput: React.FC<FilterListInputProps> = (props) => {
	const { filterOption, filters = [], handleFilter } = props || {}

	const findFilterValues = (fieldName, filters) => {
		let _filters = filters.filter((f) => f.field == fieldName)
		return _filters.map((f) => f.value)
	}

	return (
		<>
			{filterOption.variant == 'boolean' && (
				<CheckboxBooleanFilter
					field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}
        
      {filterOption.variant == 'date_range' && (
        // Todo: Update to use date range component
				<CheckboxDatesPastFilter
					field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}
      {filterOption.variant == 'date_range_past' && (
				<CheckboxDatesPastFilter
					field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}

      {filterOption.variant == 'date_range_future' && (
				<CheckboxDatesFutureFilter
					field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}


			{filterOption.variant == 'multiple_choice' && (
				<CheckboxFilter
					field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					// @ts-ignore
					options={filterOption.options}
					handleClick={handleFilter}
				/>
			)}

			{filterOption.variant == 'number_range' && (
				<CheckboxNumberRangeFilter
          field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					// @ts-ignore
					options={filterOption.options}
					handleClick={handleFilter}
				/>
			)}

			{filterOption.variant == 'ratings_scale' && (
				<CheckboxRatingsFilter
          field={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}
		</>
	)
}

export default FilterListInput
