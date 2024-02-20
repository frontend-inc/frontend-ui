import React, { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { useCollections } from 'frontend-shopify'
import {
	ProductFilters,
	ProductList,
	ProductGrid,
	ProductCarousel,
	ProductSort,
} from '../../../components/shopify'
import { ProductCollectionSortKey } from 'frontend-shopify'

type ProductCollectionProps = {
	title?: string
	editing?: boolean
	layout?: 'list' | 'grid' | 'carousel'
	handle: string | string[]
	productComponent?: React.FC<any>
	colorOptions?: string[]
	sizeOptions?: string[]
	styleOptions?: string[]
	materialOptions?: string[]
	vendorOptions?: string[]
	productTypeOptions?: string[]
	tagOptions?: string[]
	inStockFilter?: boolean
	enableFilters?: boolean
	enableSort?: boolean
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
  enableOkendoStarRating?: boolean
}

const ProductCollection: React.FC<ProductCollectionProps> = (props) => {
	const {
		title,
		handle,
		layout = 'grid',
		editing = false,
		inStockFilter,
		productComponent,
		colorOptions,
		sizeOptions,
		styleOptions,
		materialOptions,
		vendorOptions,
		productTypeOptions,
		tagOptions,
		enableFilters = false,
		enableSort = false,
		autoPlay = false,
		arrows = false,
		showDots = true,
		enableBorder = false,
		enableAddToCart = false,
		enableQuickShop = false,
		enableQuantity = false,
    enableOkendoStarRating = false,
	} = props

	const [query, setQuery] = useState<Record<string, any>>({})
	const [sortKey, setSortKey] =
		useState<ProductCollectionSortKey>('COLLECTION_DEFAULT')
	const [reverse, setReverse] = useState(false)

	const {
		loading,
		products,
		findCollection,
		filters,
		filterVariantOption,
		filterInStock,
		filterVendor,
		filterProductType,
		filterTag,
	} = useCollections()

	const handleSortClick = (sortKey, reverse = false) => {
		setSortKey(sortKey)
		setReverse(reverse)
	}

	const handleFilterColor = (value: string) => {
		filterVariantOption('color', value)
	}

	const handleFilterSize = (value: string) => {
		filterVariantOption('size', value)
	}

	const handleFilterStyle = (value: string) => {
		filterVariantOption('style', value)
	}

	const handleFilterMaterial = (value: string) => {
		filterVariantOption('material', value)
	}

	const handleFilterInStock = () => {
		filterInStock()
	}

	const handleFilterTag = (value: string) => {
		filterTag(value)
	}

	const handleFilterVendor = (value: string) => {
		filterVendor(value)
	}

	const handleFilterProductType = (value: string) => {
		filterProductType(value)
	}

	useEffect(() => {
		if (query) {
			findCollection(handle, query)
		}
	}, [query])

	useEffect(() => {
		if (handle) {
			findCollection(handle, {
				...query,
				sortKey,
				reverse,
				filters,
			})
		}
	}, [handle, filters, sortKey, reverse])

	return (
		<Stack spacing={2}>
			<Stack direction="row" spacing={1} justifyContent={'space-between'}>
				<Typography variant="h6" color="text.primary">
					{title}
				</Typography>
				<Box>
					{enableFilters && (
						<ProductFilters
							filters={filters}
							colorOptions={colorOptions}
							sizeOptions={sizeOptions}
							styleOptions={styleOptions}
							materialOptions={materialOptions}
							vendorOptions={vendorOptions}
							tagOptions={tagOptions}
							productTypeOptions={productTypeOptions}
							handleFilterColor={handleFilterColor}
							handleFilterSize={handleFilterSize}
							handleFilterStyle={handleFilterStyle}
							handleFilterMaterial={handleFilterMaterial}
							handleFilterInStock={handleFilterInStock}
							handleFilterVendor={handleFilterVendor}
							handleFilterProductType={handleFilterProductType}
							handleFilterTag={handleFilterTag}
						/>
					)}
					{enableSort && (
						<ProductSort
							sortKey={sortKey}
							reverse={reverse}
							handleClick={handleSortClick}
						/>
					)}
				</Box>
			</Stack>
			{layout == 'list' && (
				<ProductList
					editing={editing}
					loading={loading}
					products={products}
					productComponent={productComponent}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuickShop={enableQuickShop}
					enableQuantity={enableQuantity}
          enableOkendoStarRating={enableOkendoStarRating}
				/>
			)}
			{layout == 'grid' && (
				<ProductGrid
					editing={editing}
					loading={loading}
					products={products}
					productComponent={productComponent}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuickShop={enableQuickShop}
					enableQuantity={enableQuantity}
          enableOkendoStarRating={enableOkendoStarRating}
				/>
			)}
			{layout == 'carousel' && (
				<ProductCarousel
					editing={editing}
					loading={loading}
					products={products}
					productComponent={productComponent}
					autoPlay={autoPlay}
					arrows={arrows}
					showDots={showDots}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuickShop={enableQuickShop}
					enableQuantity={enableQuantity}
          enableOkendoStarRating={enableOkendoStarRating}
				/>
			)}
		</Stack>
	)
}

export default ProductCollection
