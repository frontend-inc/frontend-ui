import React from 'react'
import { Placeholder } from '../..'
import { ProductArray } from '..'
import { Box } from '@mui/material'
import { useFavorites } from 'frontend-shopify'
import { useAuth, UserType } from 'frontend-js'

export type ProductFavoritesProps = {
	href: string
  user: UserType
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
    user,
		enableBorder = false,
		buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
	} = props || {}

  const { shopify_favorites: favorites } = user || []

	return (
		<Box sx={sx.root}>
			<ProductArray
				href={href}
				handles={favorites}
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
