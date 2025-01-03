'use client'

import React, { useEffect, useState } from 'react'
import {
	SearchFilterOptionType,
	useProducts,
	useSearchFilters,
} from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { useParams } from 'next/navigation'
import { SearchInput, Empty } from '../..'
import {
	ShopifyProductSortButton,
	ShopifyProducts,
	ShopifyProductSearchFilters,
} from '..'
import LoadMore from '../search/LoadMore'

export type ShopifyProductSearchProps = {
	handle: string
	options?: SearchFilterOptionType[]
	enableSearch?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
}

const ShopifyProductSearch: React.FC<ShopifyProductSearchProps> = (props) => {
	const {
		options,
		enableSearch = false,
		enableFilters = false,
		enableSorting = false,
		enableAddToCart = false,
		enableQuantity = false,
	} = props || {}

	let { handle } = useParams() as any
	if (handle == 'index' || handle == undefined) handle = ''

	const [keywords, setKeywords] = useState('')

	const { loading, cursor, hasNextPage, products, findProducts } = useProducts()

	const [sortKey, setSortKey] = useState<ProductSortKeyType>('BEST_SELLING')

	const [reverse, setReverse] = useState(false)

	const { filters, handleFilter, handleFilterArray } = useSearchFilters()

	const handleChange = (ev) => {
		setKeywords(ev.target.value)
	}

	const handleSearch = (keywords) => {
		findProducts({
			query: keywords,
			sortKey,
			reverse,
		})
	}

	const handleLoadMore = (cursor) => {
		findProducts({
			query: keywords,
			sortKey,
			reverse,
			after: cursor,
		})
	}

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
		findProducts({
			query: keywords,
			sortKey: sortKey,
			reverse: reverse,
		})
	}

	useEffect(() => {
		findProducts({
			sortKey: sortKey,
			reverse: reverse,
		})
	}, [])

	return (
		<div className="flex flex-col space-y-4 w-full">
			<div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 w-full items-center">
				{enableSearch && (
					<div className="w-full sm:max-w-screen-sm">
						<SearchInput
							label="Search"
							value={keywords}
							handleChange={handleChange}
							handleSearch={handleSearch}
							placeholder={'Enter keywords...'}
						/>
					</div>
				)}

				{enableFilters && (
					<div className="w-full sm:w-auto">
						<ShopifyProductSearchFilters
							filters={filters}
							options={options}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</div>
				)}
				{enableSorting && (
					<div className="w-full sm:w-auto">
						<ShopifyProductSortButton
							sortKey={sortKey}
							reverse={reverse}
							handleClick={handleSortClick}
						/>
					</div>
				)}
			</div>
			{products?.length > 0 && (
				<ShopifyProducts
					loading={loading}
					products={products}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
				/>
			)}
			{!loading && (!products || products?.length == 0) && (
				<Empty
					icon="ri-search-line"
					title="No search results"
					description="Try another search term"
				/>
			)}
			<LoadMore
				loading={loading}
				hasNextPage={hasNextPage}
				handleSearch={() => handleLoadMore(cursor)}
			/>
		</div>
	)
}

export default ShopifyProductSearch
