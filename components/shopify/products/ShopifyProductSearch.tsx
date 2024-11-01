'use client'

import React, { useEffect, useState } from 'react'
import {
	PriceOptionType,
	SearchFilterOptionType,
	useProducts,
	useSearchFilters,
} from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { useRouter, useParams } from 'next/navigation'
import { SearchInput, Placeholder } from '../..'
import {
	ShopifyProductSortButton,
	ShopifyProducts,
	ShopifyProductSearchFilters,
} from '..'
import LoadMore from '../search/LoadMore'
import { cn } from 'frontend-shadcn'

const PER_PAGE = 48

export type ShopifyProductSearchProps = {
	handle: string
	options?: SearchFilterOptionType[]
	priceOptions?: PriceOptionType[]
	inStockFilter?: boolean
	enableFilters?: boolean
	enableSorting?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
}

const ShopifyProductSearch: React.FC<ShopifyProductSearchProps> = ({
	options,
	priceOptions,
	enableFilters = false,
	enableSorting = false,
	enableBorder = false,
	enableAddToCart = false,
	enableQuickShop = false,
	enableQuantity = false,
}) => {

	let { handle } = useParams() as any
	if (handle == 'index' || handle == undefined) handle = ''

	const [keywords, setKeywords] = useState(String(query).toLowerCase())
	const first = PER_PAGE

	const {
		loading,
		cursor,
		hasNextPage,
		products,
		findProducts,
		searchProducts,
	} = useProducts()

	const [sortKey, setSortKey] =
		useState<ProductSortKeyType>('COLLECTION_DEFAULT')
	const [reverse, setReverse] = useState(false)

	const { filters, handleFilter, handleFilterArray, formatQueryFilters } =
		useSearchFilters()

	const handleChange = (ev) => {
		setKeywords(ev.target.value)
		if (keywords?.length == 0) {
			handleSearch('')
		}
	}

	const handleSearch = (keywords) => {
		setKeywords(keywords)
	}

	const handleLoadMore = (after) => {
		searchProducts({
			query: `${keywords} tag_not:hidden`,
			first: first,
			after,
		})
	}

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

	useEffect(() => {
		if (filters?.length > 0) {
			let filterQuery = formatQueryFilters(filters)
			searchProducts({
				query: `${keywords} ${filterQuery}`,
			})
		} else {
			findProducts({
				first: 20,
			})
		}
	}, [filters])

	return (
		<div className="pt-2">
			<div
				className={cn(
					'flex flex-col sm:flex-row justify-between items-center mb-1',
					'sm:ml-1 ml-0'
				)}
			>
				{enableSorting && (
					<ShopifyProductSortButton
						sortKey={sortKey}
						reverse={reverse}
						handleClick={handleSortClick}
					/>
				)}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
				{enableFilters && (
					<div className="col-span-1 md:col-span-3">
						<ShopifyProductSearchFilters
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</div>
				)}
				<div
					className={cn(
						'col-span-1',
						enableFilters ? 'md:col-span-9' : 'md:col-span-12'
					)}
				>
					<div className="mb-2">
						<SearchInput
							value={keywords}
							handleChange={handleChange}
							handleSearch={handleSearch}
							placeholder={'Search'}
						/>
					</div>

					{products?.length > 0 && (
						<ShopifyProducts
							loading={loading}
							products={products}
							xs={12}
							sm={6}
							md={enableFilters ? 6 : 4}
							lg={4}
							enableBorder={enableBorder}
							enableAddToCart={enableAddToCart}
							enableQuickShop={enableQuickShop}
							enableQuantity={enableQuantity}
						/>
					)}

					{!loading && (!products || products?.length == 0) && (
						<Placeholder
							icon="Search"
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
			</div>
		</div>
	)
}

export default ShopifyProductSearch
