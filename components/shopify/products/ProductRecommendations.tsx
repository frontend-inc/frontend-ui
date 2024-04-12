import React, { useState, useEffect } from 'react'
import { useProducts } from 'frontend-shopify'
import { ProductGrid, ProductCarousel } from '../../../components/shopify'
import { Box } from '@mui/material'

export type ProductRecommendationsProps = {
	handle?: string | string[]
	editing?: boolean
	layout?: 'grid' | 'carousel'
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	enableOkendoStarRating?: boolean
	buttonText?: string
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = (
	props
) => {
	const {
		handle,
		editing = false,
		layout = 'grid',
		perPage = 12,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
		enableOkendoStarRating,
		maxWidth,
	} = props || {}

	const [similarProducts, setSimilarProducts] = useState<any>()

	const {
		loading,
		findProduct,
		product,
		products,
		findProductRecommendations,
	} = useProducts()

	useEffect(() => {
		if (product) {
			findProductRecommendations(product?.id)
		}
	}, [product])

	// Hide the current product and any products marked hidden
	useEffect(() => {
		if (product && products) {
			setSimilarProducts(
				products
					.filter((p) => p.id != product?.id)
					.filter((p) => !p.tags.includes('hidden'))
					.filter((p, index) => index < Number(perPage))
			)
		}
	}, [product, products])

	useEffect(() => {
		if (handle) {
			findProduct(String(handle))
		}
	}, [handle])

	return (
		<Box sx={sx.root}>
			{layout == 'grid' && (
				<ProductGrid
					editing={editing}
					loading={loading}
					products={similarProducts}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
					enableOkendoStarRating={enableOkendoStarRating}
					buttonText={buttonText}
				/>
			)}
			{layout == 'carousel' && (
				<ProductCarousel
					editing={editing}
					loading={loading}
					products={similarProducts}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
					enableOkendoStarRating={enableOkendoStarRating}
					buttonText={buttonText}
				/>
			)}
		</Box>
	)
}

export default ProductRecommendations

const sx = {
	root: {
		width: '100%',
	},
}
