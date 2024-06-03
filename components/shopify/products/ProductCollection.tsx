import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import {
	ProductSortKeyType,
	useCollections,
	useSearchFilters,
} from 'frontend-shopify'
import {
	ProductGrid,
	ProductSortButton,
	ProductFilterButton,
} from '../../../components/shopify'
import { PriceOptionType, SearchFilterOptionType } from 'frontend-shopify'

export type ProductCollectionProps = {
	href: string
	handle: string
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	enableFilters?: boolean
	enableSort?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductCollection: React.FC<ProductCollectionProps> = (props) => {
	const {
		handle,
		href,
		options = [],
		priceOptions = [],
		enableFilters = false,
		enableSort = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props

	const [query, setQuery] = useState<Record<string, any>>({})
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
		if (query) {
			findCollection(handle, query)
		}
	}, [query])

	useEffect(() => {
		if (handle) {
			let productFilters = formatProductFilters(filters)
			findCollection(handle, {
				...query,
				sortKey,
				reverse,
				filters: productFilters,
			})
		}
	}, [handle, filters, sortKey, reverse])

	return (
		<Stack spacing={2}>
			<Stack direction="row" spacing={1}>
				{enableFilters && (
					<ProductFilterButton
						filters={filters}
						options={options}
						priceOptions={priceOptions}
						handleFilter={handleFilter}
						handleFilterArray={handleFilterArray}
					/>
				)}
				{enableSort && (
					<ProductSortButton
						sortKey={sortKey}
						reverse={reverse}
						handleClick={handleSortClick}
					/>
				)}
			</Stack>
			<ProductGrid
				href={href}
				loading={loading}
				products={products}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuickShop={enableQuickShop}
				enableQuantity={enableQuantity}
				enableOkendoStarRating={enableOkendoStarRating}
			/>
		</Stack>
	)
}

export default ProductCollection
