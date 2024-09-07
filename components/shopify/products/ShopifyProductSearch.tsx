import React, { useState, useContext, useEffect } from 'react'
import {
	PriceOptionType,
	SearchFilterOptionType,
	useProducts,
	useSearchFilters,
} from 'frontend-shopify'
import { ProductSortKeyType } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import { useRouter } from 'next/router'
import { Box, Grid, Stack } from '@mui/material'
import { SearchInput, Placeholder } from '../..'
import { ShopifyProductSortButton, ShopifyProductGrid, ShopifyProductSearchFilters } from '..'
import LoadMore from '../search/LoadMore'
import { useApp } from '../../../hooks'

const PER_PAGE = 48

export type ShopifyProductSearchProps = {
	href: string
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
	enableOkendoStarRating?: boolean
}

const ShopifyProductSearch: React.FC<ShopifyProductSearchProps> = (props) => {
	const {
		href,
		options,
		priceOptions,
		enableFilters = false,
		enableSorting = false,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
		enableOkendoStarRating = false,
	} = props

	const router = useRouter()
	const { trackProductsSearched } = useSegment()

	let { page_id: pageId, handle } = router.query
	if (handle == 'index' || handle == undefined) handle = ''
	const [query, setQuery] = useState(handle)

	const [keywords, setKeywords] = useState(String(query).toLowerCase())
	const first = PER_PAGE

	const { clientUrl } = useApp()

	const {
		loading,
		errors,
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
		if (keywords?.length > 0) {
			trackProductsSearched(keywords)
		}
		router.push(`${clientUrl}/${pageId}/${keywords.split(' ').join('-')}`)
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
		if (query?.length > 0 || filters?.length > 0) {
			let searchKeywords = decodeURI(String(query)).split('-')?.join(' ')
			let filterQuery = formatQueryFilters(filters)
			searchProducts({
				query: `${searchKeywords} ${filterQuery}`,
			})
		} else {
			findProducts({
				first: 20,
			})
		}
	}, [query, filters])

	useEffect(() => {
		setQuery(handle)
	}, [handle])

	return (
		<Box sx={sx.root}>
			<Stack direction={{ xs: 'column', sm: 'row' }} sx={sx.header} spacing={1}>
				{enableSorting && (
					<ShopifyProductSortButton
						sortKey={sortKey}
						reverse={reverse}
						handleClick={handleSortClick}
					/>
				)}
			</Stack>
			<Grid container spacing={2}>
				{enableFilters && (
					<Grid item xs={12} sm={12} md={3}>
						<ShopifyProductSearchFilters
							filters={filters}
							options={options}
							priceOptions={priceOptions}
							handleFilter={handleFilter}
							handleFilterArray={handleFilterArray}
						/>
					</Grid>
				)}
				<Grid item xs={12} sm={12} md={enableFilters ? 9 : 12}>
					<Box sx={sx.searchInput}>
						<SearchInput
							value={keywords}
							handleChange={handleChange}
							handleSearch={handleSearch}
							placeholder={'Search'}
						/>
					</Box>

					{products?.length > 0 && (
						<ShopifyProductGrid
							href={href}
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
							enableOkendoStarRating={enableOkendoStarRating}
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
				</Grid>
			</Grid>
		</Box>
	)
}

export default ShopifyProductSearch

const sx = {
	root: {
		pt: 2,
	},
	searchInput: {
		mb: 2,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		mb: 1,
		ml: {
			sm: 1,
			xs: 0,
		},
	},
}
