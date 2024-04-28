import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../..'
import { useFavorites } from 'frontend-shopify'
import { ProductType } from 'frontend-shopify'

type ProductFavoriteButtonProps = {
	product: ProductType
}

const ProductFavoriteButton: React.FC<ProductFavoriteButtonProps> = (props) => {
	const { product } = props

	const { toggleFavorite, isFavorite } = useFavorites({
		product,
	})

	const handleClick = async () => {
		toggleFavorite()
	}

	return (
		<Button
			size="large"
			onClick={handleClick}
			variant="contained"
			color={isFavorite ? 'primary' : 'secondary'}
			sx={{
				...sx.button,
			}}
		>
			<Icon
				name="Heart"
				color={isFavorite ? 'primary.contrastText' : 'secondary.contrastText'}
			/>
		</Button>
	)
}

export default ProductFavoriteButton

const sx = {
	button: {
		minWidth: '44px',
		p: 0,
		borderRadius: 1,
	},
}
