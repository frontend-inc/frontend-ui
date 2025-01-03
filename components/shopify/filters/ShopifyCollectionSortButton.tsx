'use client'

import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import ShopifySortList from './ShopifySortList'
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
		<Popover isOpen={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					fullWidth
					onPress={handleOpen}
					endContent={<ArrowUpDown className="h-4 w-4" />}
				>
					{currentSortLabel}
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<ShopifySortList
					enableIcons
					value={sortKey}
					reverse={reverse}
					options={COLLECTION_SORT_OPTIONS}
					//@ts-ignore
					handleClick={handleSortClick}
				/>
			</PopoverContent>
		</Popover>
	)
}

export default ShopifyCollectionSortButton
