import React from 'react'
import { Placeholder } from '../..'
import { ProductGrid } from '..'
import { Box } from '@mui/material'
import { useFavorites } from 'frontend-shopify'

export type ProductFavoritesProps = {
	href: string
	perPage?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	buttonText?: string
}

const ProductFavorites: React.FC<ProductFavoritesProps> = (props) => {
	const {
		href,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
	} = props || {}

	const { favorites } = useFavorites()

	return (
		<Box sx={sx.root}>
			<ProductGrid
				href={href}
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
