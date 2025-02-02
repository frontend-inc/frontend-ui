'use client'

import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Popover, PopoverContent, PopoverTrigger } from 'frontend-shadcn'
import { Sheet, SheetContent, SheetTrigger } from 'frontend-shadcn'
import { ListFilter } from 'lucide-react'
import ProductFiltersList from './ShopifyProductFiltersList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'

type ShopifyProductFilterButtonProps = {
	filters: SearchFilterType[]
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ShopifyProductFilterButton: React.FC<ShopifyProductFilterButtonProps> = (
	props
) => {
	const [open, setOpen] = useState(false)
	const toggleMenu = () => setOpen(!open)

	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<>
			{/* Desktop view */}
			<div className="hidden sm:block">
				<Popover open={open} onOpenChange={toggleMenu}>
					<PopoverTrigger asChild>
						<Button
							variant="solid"
							color="primary"
							className="w-full sm:w-auto"
							onPress={toggleMenu}
							startContent={<ListFilter className="h-4 w-4" />}
						>
							Filter
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-80">
						<ProductFiltersList
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</PopoverContent>
				</Popover>
			</div>

			{/* Mobile view */}
			<div className="sm:hidden">
				<Sheet open={open} onOpenChange={toggleMenu}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="w-full"
							onPress={toggleMenu}
							startContent={<ListFilter className="h-4 w-4" />}
						>
							Filter
						</Button>
					</SheetTrigger>
					<SheetContent>
						<ProductFiltersList
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</SheetContent>
				</Sheet>
			</div>
		</>
	)
}

export default ShopifyProductFilterButton
