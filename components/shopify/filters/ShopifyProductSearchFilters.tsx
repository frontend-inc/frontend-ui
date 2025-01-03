'use client'

import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Sheet } from '../../../components'
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

  const [open, setOpen] = useState(false)

	return (
		<>
      <Button variant="ghost" fullWidth>
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Filters
      </Button>
			<Sheet 
        open={open}
        handleClose={() => setOpen(false)}
        title="Filter"
      >
				<ProductFiltersList
					filters={filters}
					options={options}
					priceOptions={priceOptions}
					handleFilter={handleFilter}
					handleFilterArray={handleFilterArray}
				/>
		  </Sheet>
    </>
	)
}

export default ShopifyProductSearchFilters
