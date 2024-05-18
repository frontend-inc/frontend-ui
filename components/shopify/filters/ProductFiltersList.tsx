import React from 'react'
import { CheckboxFilterList } from '..'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'
import { Stack } from '@mui/material'
import { SHOPIFY_SEARCH_FILTERS } from '../../../constants'
import RadioPriceRangeInput from './RadioPriceRangeInput'
import { MenuList } from '../../../components'

type ProductFiltersListProps = {
	filters: SearchFilterType[]
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ProductFiltersList: React.FC<ProductFiltersListProps> = (props) => {
	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<Stack spacing={0}>
			{SHOPIFY_SEARCH_FILTERS.map((filterType, i) => {
				let activeFilters = filters?.filter((f) => f.name == filterType.value)
				let option = options?.find((o) => o.name == filterType.value)
				if (!option) return null
				return (
					<MenuList label={filterType.label}>
						<CheckboxFilterList
							filters={activeFilters}
							option={option}
							handleClick={filterType.array ? handleFilterArray : handleFilter}
						/>
					</MenuList>
				)
			})}
			{priceOptions?.length > 0 && (
				<MenuList label="Price">
					<RadioPriceRangeInput
						filters={filters}
						options={priceOptions}
						handleClick={handleFilter}
					/>
				</MenuList>
			)}
		</Stack>
	)
}

export default ProductFiltersList
