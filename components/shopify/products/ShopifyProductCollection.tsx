'use client'

import React, { useEffect, useState } from 'react'
import {
	ProductSortKeyType,
	useCollections,
	useSearchFilters,
} from 'frontend-shopify'
import {
	ShopifyProducts,
	ShopifyProductSortButton,
	ShopifyProductFilterButton,
} from '..'
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify'

export type ShopifyProductCollectionProps = {
	handle: string
	options?: SearchFilterOptionType[]
	priceOptions?: PriceOptionType[]
	enableFilters?: boolean
	enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
}

const ShopifyProductCollection: React.FC<ShopifyProductCollectionProps> = (
	props
) => {
	const {
		handle,
		options = [],
		priceOptions = [],
		enableFilters = false,
		enableSort = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
	} = props

	const [sortKey, setSortKey] =
		useState<ProductSortKeyType>('COLLECTION_DEFAULT')
	const [reverse, setReverse] = useState(false)

	const { loading, products, findCollection } = useCollections()

	const { filters, handleFilter, handleFilterArray, formatProductFilters } =
		useSearchFilters()

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

	useEffect(() => {
		if (handle) {
			let productFilters = formatProductFilters(filters)
			findCollection(handle, {
				sortKey,
				reverse,
				filters: productFilters,
			})
		}
	}, [handle, filters, sortKey, reverse])

	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-row space-x-2">
				{enableFilters && (
					<ShopifyProductFilterButton
						filters={filters}
						options={options}
						priceOptions={priceOptions}
						handleFilter={handleFilter}
						handleFilterArray={handleFilterArray}
					/>
				)}
				{enableSort && (
					<ShopifyProductSortButton
						sortKey={sortKey}
						reverse={reverse}
						handleClick={handleSortClick}
					/>
				)}
			</div>
			<ShopifyProducts
				loading={loading}
				products={products}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuickShop={enableQuickShop}
				enableQuantity={enableQuantity}
			/>
		</div>
	)
}

export default ShopifyProductCollection
