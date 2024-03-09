import React, { useEffect } from 'react'
import { ProductCollection } from '../../../components/shopify'
import { useCollections } from 'frontend-shopify'

type ProductCollectionByHandleProps = {
	editing?: boolean
	enableTitle?: boolean
	layout?: 'grid' | 'carousel'
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

const ProductCollectionByHandle: React.FC<ProductCollectionByHandleProps> = (
	props
) => {
	const {
		handle,
		enableTitle = false,
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

	const { loading, collection, findCollection } = useCollections()

	useEffect(() => {
		if (handle) {
			findCollection(handle)
		}
	}, [handle])

	return (
		<ProductCollection
			handle={handle}
			title={enableTitle && collection?.title}
			layout={layout}
			editing={editing}
			inStockFilter={inStockFilter}
			productComponent={productComponent}
			colorOptions={colorOptions}
			sizeOptions={sizeOptions}
			styleOptions={styleOptions}
			materialOptions={materialOptions}
			vendorOptions={vendorOptions}
			productTypeOptions={productTypeOptions}
			tagOptions={tagOptions}
			enableFilters={enableFilters}
			enableSort={enableSort}
			autoPlay={autoPlay}
			arrows={arrows}
			showDots={showDots}
			enableBorder={enableBorder}
			enableAddToCart={enableAddToCart}
			enableQuickShop={enableQuickShop}
			enableQuantity={enableQuantity}
			enableOkendoStarRating={enableOkendoStarRating}
		/>
	)
}

export default ProductCollectionByHandle
