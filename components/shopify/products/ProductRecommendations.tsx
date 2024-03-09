import React, { useState, useEffect } from 'react'
import { useProducts } from 'frontend-shopify'
import { Typography } from '@mui/material'
import { ProductGrid, ProductCarousel } from '../../../components/shopify'
import { Box } from '@mui/material'

type ProductRecommendationsProps = {
	handle?: string | string[]
	editing?: boolean
	layout?: 'grid' | 'carousel'
	title?: string
	perPage?: string
	productComponent?: React.FC<any>
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
		title = 'Similar products',
		perPage = 12,
		productComponent,
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
			{title && (
				<Typography color="textPrimary" variant="h6">
					{title}
				</Typography>
			)}
			{layout == 'grid' && (
				<ProductGrid
					editing={editing}
					loading={loading}
					products={similarProducts}
					productComponent={productComponent}
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
					productComponent={productComponent}
					enableBorder={enableBorder}
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
