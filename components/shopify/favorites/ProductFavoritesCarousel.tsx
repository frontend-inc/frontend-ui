import React from 'react'
import { Icon, Placeholder } from '../..'
import { ProductCarousel } from '..'
import { Box, Typography } from '@mui/material'
import { useFavorites } from 'frontend-shopify'

type ProductFavoritesCarouselProps = {
	href: string
	title?: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const ProductFavoritesCarousel: React.FC<ProductFavoritesCarouselProps> = (
	props
) => {
	const {
		href,
		title = 'Favorites',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,

		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography mb={1} color="textPrimary" variant="h5">
					{title}
				</Typography>
			)}
			<ProductCarousel
				href={href}
				products={favorites}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableQuickShop={enableQuickShop}
				buttonText={buttonText}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
				enableDots={enableDots}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon={'Heart'}
					title={'No favorites'}
					description={'You have no favorites yet'}
				/>
			)}
		</Box>
	)
}

export default ProductFavoritesCarousel

const sx = {
	root: {
		width: '100%',
	},
}
