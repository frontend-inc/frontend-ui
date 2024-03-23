import React from 'react'
import { Icon, Placeholder } from '../..'
import { ProductGrid } from '..'
import { Box, Typography } from '@mui/material'
import { useFavorites } from 'frontend-shopify'

type ProductFavoritesProps = {
	editing?: boolean
	title?: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
}

const ProductFavorites: React.FC<ProductFavoritesProps> = (props) => {
	const {
		editing = false,
		title = 'Favorites',
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography mb={1} color="textPrimary" variant="h5">
					{title}
				</Typography>
			)}
			<ProductGrid
				editing={editing}
				products={favorites}
				enableBorder={enableBorder}
				enableAddToCart={enableAddToCart}
				enableQuantity={enableQuantity}
				enableQuickShop={enableQuickShop}
				buttonText={buttonText}
			/>
			{favorites?.length === 0 && (
				<Placeholder
					icon={'Heart'}
					title={'No favorites'}
					description={'You have no favorites yet.'}
				/>
			)}
		</Box>
	)
}

export default ProductFavorites

const sx = {
	root: {
		width: '100%',
	},
}
