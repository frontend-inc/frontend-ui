'use client'

import React, { useState } from 'react'
import { Button } from '../..'
import { Sheet } from '../../../components'
import ShopifySortList from './ShopifySortList'
import { PRODUCT_SORT_OPTIONS } from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { ArrowUpDown } from 'lucide-react'

type ShopifyProductSortButtonProps = {
	sortKey?: ProductSortKeyType
	reverse?: boolean
	handleClick: (sortKey: ProductSortKeyType, reverse: boolean) => void
}

const ShopifyProductSortButton: React.FC<ShopifyProductSortButtonProps> = (
	props
) => {
	const { sortKey = 'RELEVANCE', reverse, handleClick } = props

	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	const handleSortClick = (sortKey: ProductSortKeyType, reverse: boolean) => {
		handleClick(sortKey, reverse)
		setOpen(false)
	}

	const currentSortLabel = PRODUCT_SORT_OPTIONS.find(
		(option) => option.value === sortKey
	)?.label

	return (
		<>
			<Button variant="secondary" className="w-full" onClick={handleOpen}>
				{currentSortLabel}
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
			<Sheet title="Sort by" open={open} handleClose={() => setOpen(false)}>
				<div className="w-full py-2">
					<ShopifySortList
						enableIcons
						value={sortKey}
						reverse={reverse}
						options={PRODUCT_SORT_OPTIONS}
						handleClick={handleSortClick}
					/>
				</div>
			</Sheet>
		</>
	)
}

export default ShopifyProductSortButton
