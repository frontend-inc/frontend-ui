import React from 'react'
import { Icon, Placeholder } from '../../../components'
import { ProductGrid, ProductCarousel } from '../../../components/shopify'
import { Box, Typography } from '@mui/material'
import { useRecentlyViewed } from 'frontend-shopify'

type RecentlyViewedProps = {
	editing?: boolean
	layout?: 'grid' | 'carousel'
	title?: string
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
		title = 'RecentlyViewed',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
		emptyIcon = 'Shirt',
		emptyTitle = 'No recently viewed',
		emptyDescription = 'You have no recently viewed products',
	} = props || {}

	const { products } = useRecentlyViewed()

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography mb={1} color="textPrimary" variant="h6">
					{title}
				</Typography>
			)}
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
					icon={<Icon name={emptyIcon} />}
					title={emptyTitle}
					description={emptyDescription}
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
