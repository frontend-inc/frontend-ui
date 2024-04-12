import React from 'react'
import { FilterOptionType, SearchFilterOptionType } from '../../../../types'
import CheckboxFilter from './CheckboxFilter'
import CheckboxBooleanFilter from './CheckboxBooleanFilter'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'
import CheckboxRatingsFilter from './CheckboxRatingsFilter'

type CollectionFilterListInputProps = {
	filters: FilterOptionType[]
	filterOption: SearchFilterOptionType
	handleFilter: (filter: FilterOptionType) => void
}

const CollectionFilterListInput: React.FC<CollectionFilterListInputProps> = (
	props
) => {
	const { filterOption, filters = [], handleFilter } = props || {}

	const findFilterValues = (fieldName, filters) => {
		let _filters = filters.filter((f) => f.field == fieldName)
		return _filters.map((f) => f.value)
	}

	return (
		<>
			{filterOption.variant == 'boolean' && (
				<CheckboxBooleanFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}

			{filterOption.variant == 'multiple_choice' && (
				<CheckboxFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
          // @ts-ignore
					options={filterOption.options}
					handleClick={handleFilter}
				/>
			)}

			{filterOption.variant == 'number_range' && (
				<CheckboxNumberRangeFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
          // @ts-ignore
					options={            
            filterOption.options
          }
					handleClick={handleFilter}
				/>
			)}

			{filterOption.variant == 'ratings_scale' && (
				<CheckboxRatingsFilter
					name={filterOption?.field}
					label={filterOption?.label}
					values={findFilterValues(filterOption?.field, filters)}
					handleClick={handleFilter}
				/>
			)}
		</>
	)
}

export default CollectionFilterListInput
