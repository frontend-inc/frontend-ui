import React from 'react'
import { FilterOptionType, SearchFilterOptionType } from '../../../../types'
import CheckboxFilter from './CheckboxFilter'
import CheckboxBooleanFilter from './CheckboxBooleanFilter'
import CheckboxNumberRangeFilter from './CheckboxNumberRangeFilter'
import CheckboxRatingsFilter from './CheckboxRatingsFilter'
import CheckboxPriceRangeFilter from './CheckboxPriceRangeFilter'

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

			{filterOption.variant == 'price_range' && (
				<CheckboxPriceRangeFilter
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

			{filterOption.variant == 'ratings' && (
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
