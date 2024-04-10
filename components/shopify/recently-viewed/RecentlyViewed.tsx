import React from 'react'
import { Placeholder } from '../../../components'
import { ProductGrid, ProductCarousel } from '../../../components/shopify'
import { Box } from '@mui/material'
import { useRecentlyViewed } from 'frontend-shopify'

export type RecentlyViewedProps = {
	editing?: boolean
	layout?: 'grid' | 'carousel'
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
	emptyIcon?: string
	emptyTitle?: string
	emptyDescription?: string
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = (props) => {
	const {
		editing = false,
		layout = 'grid',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
	} = props || {}

	const { products } = useRecentlyViewed()

	return (
		<Box sx={sx.root}>
			{layout == 'grid' && (
				<ProductGrid
					editing={editing}
					products={products}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
					buttonText={buttonText}
				/>
			)}
			{layout == 'carousel' && (
				<ProductCarousel
					editing={editing}
					products={products}
					enableBorder={enableBorder}
					buttonText={buttonText}
				/>
			)}
			{products?.length === 0 && (
				<Placeholder
					icon={'ShoppingCart'}
					title={'No recently viewed'}
					description={'You have no recently viewed products.'}
				/>
			)}
		</Box>
	)
}

export default RecentlyViewed

const sx = {
	root: {
		width: '100%',
	},
}
