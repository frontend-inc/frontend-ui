import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../../../components'
import { useFavorites } from 'frontend-shopify'
import { ProductType } from 'frontend-shopify'

type FavoriteButtonProps = {
	product: ProductType
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
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

export default FavoriteButton

const sx = {
	button: {
		minWidth: '44px',
		p: 0,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
}
