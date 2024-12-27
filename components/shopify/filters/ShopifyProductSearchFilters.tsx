'use client'

import React, { useState } from 'react'
import { Button } from '../../../components'
import { Sheet, SheetContent, SheetTrigger } from 'frontend-shadcn'
import ProductFiltersList from './ShopifyProductFiltersList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'
import { SlidersHorizontal } from 'lucide-react'

type ShopifyProductSearchFiltersProps = {
	filters: SearchFilterType[]
	options?: SearchFilterOptionType[]
	priceOptions?: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ShopifyProductSearchFilters: React.FC<
	ShopifyProductSearchFiltersProps
> = (props) => {
	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" className="w-full">
					<SlidersHorizontal className="mr-2 h-4 w-4" />
					Filters
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<ProductFiltersList
					filters={filters}
					options={options}
					priceOptions={priceOptions}
					handleFilter={handleFilter}
					handleFilterArray={handleFilterArray}
				/>
			</SheetContent>
		</Sheet>
	)
}

export default ShopifyProductSearchFilters
