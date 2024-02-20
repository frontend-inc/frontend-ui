import React from 'react'
import { 
  Icon,
  Placeholder
} from '../..'
import {
	ProductGrid,
	ProductList,
	ProductCarousel,
} from '..'
import { Box, Typography } from '@mui/material'
import { useFavorites } from 'frontend-shopify'

type FavoritesProps = {
	editing?: boolean
	layout?: 'list' | 'grid' | 'carousel'
	title?: string
	perPage?: string
	productComponent?: React.FC<any>
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
  buttonText?: string
  emptyIcon?: string
  emptyTitle?: string
  emptyDescription?: string
}

const Favorites: React.FC<FavoritesProps> = (props) => {

  const {
		editing = false,
		layout = 'grid',
		title = 'Favorites',
		productComponent,
		enableBorder = false,
    buttonText = 'Add to cart',
		enableAddToCart,
		enableQuantity,
		enableQuickShop,
    emptyIcon='Heart',
    emptyTitle='No favorites',
    emptyDescription= 'You have no favorites yet'
	} = props || {}

	const { 
    favorites 
  } = useFavorites()

	return (
		<Box sx={sx.root}>
			{title && (
				<Typography mb={1} color="textPrimary" variant="h6">
					{title}
				</Typography>
			)}
			{layout == 'list' && (
				<ProductList
					editing={editing}
					products={favorites}
					productComponent={productComponent}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuantity={enableQuantity}
					enableQuickShop={enableQuickShop}
          buttonText={buttonText}
				/>
			)}
			{layout == 'grid' && (
				<ProductGrid
					editing={editing}
					products={favorites}
					productComponent={productComponent}
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
					products={favorites}
					productComponent={productComponent}
					enableBorder={enableBorder}
          buttonText={buttonText}
				/>
			)}
      {favorites?.length === 0 && (
				<Placeholder
					icon={<Icon name={emptyIcon} />}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
		</Box>
	)
}

export default Favorites

const sx = {
	root: {
		width: '100%',
	},
}
