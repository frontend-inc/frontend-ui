'use client'

import React, { useState } from 'react'
import { Button } from '../..'
import { Sheet, SheetContent, SheetTrigger } from 'frontend-shadcn'
import SortList from './ShopifySortList'
import { COLLECTION_SORT_OPTIONS } from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { ArrowUpDown } from 'lucide-react'

type ShopifyCollectionSortButtonProps = {
	sortKey?: ProductSortKeyType
	reverse?: boolean
	handleClick: (sortKey: ProductSortKeyType, reverse: boolean) => void
}

const ShopifyCollectionSortButton: React.FC<
	ShopifyCollectionSortButtonProps
> = (props) => {
	const { sortKey = 'COLLECTION_DEFAULT', reverse, handleClick } = props

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	const handleSortClick = (sortKey: ProductSortKeyType, reverse: boolean) => {
		handleClick(sortKey, reverse)
		setOpen(false)
	}

	const currentSortLabel = COLLECTION_SORT_OPTIONS.find(
		(option) => option.value === sortKey
	)?.label

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="secondary" className="w-full" onClick={handleOpen}>
					{currentSortLabel}
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SortList
					enableIcons
					value={sortKey}
					reverse={reverse}
					options={COLLECTION_SORT_OPTIONS}
					handleClick={handleSortClick}
				/>
			</SheetContent>
		</Sheet>
	)
}

export default ShopifyCollectionSortButton
