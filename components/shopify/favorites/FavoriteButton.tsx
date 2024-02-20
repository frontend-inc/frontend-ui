import React from 'react'
import { Button } from '@mui/material'
import { Icon } from '../../../components'
import { useFavorites } from 'frontend-shopify'
import { Product } from 'frontend-shopify'

type FavoriteButtonProps = {
	product: Product
}

const FavoriteButton: React.FC<FavoriteButtonProps> = (props) => {
	const { product } = props
	
	const { 
    toggleFavorite,
    isFavorite,
  } = useFavorites({
    product
  })

	const handleClick = async () => {
		toggleFavorite()
	}

	return (
		<Button
      size="large"
			onClick={handleClick}
			sx={{
				...sx.button,        
				...(isFavorite && sx.favorited),
			}}
		>
			<Icon
				name="Heart"
				color={isFavorite ? 'primary.contrastText' : 'text.primary'}
			/>
		</Button>
	)
}

export default FavoriteButton

const sx = {
	button: {
    minWidth: '44px',
    p: 0,
    borderRadius: theme => `${theme.shape.borderRadius}px`,
		bgcolor: 'tertiary.main',
		'&:hover': {
			bgcolor: 'tertiary.main',
		},
	},
	favorited: {
		bgcolor: 'primary.main',
		'&:hover': {
			bgcolor: 'primary.dark',
		},
	},
}
