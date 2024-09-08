import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { isProductLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

type ProductLikeButtonProps = {
	product: any
	size?: 'small' | 'large'
	color?: string
	numLikes?: number
}

const ProductLikeButton: React.FC<ProductLikeButtonProps> = (props) => {
	const { product, color = 'text.secondary', size = 'small' } = props

	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [liked, setLiked] = useState(false)

  const { likeProduct, unlikeProduct } = useSocial()

	const handleClick = async () => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (liked) {
			setLiked(false)
			await unlikeProduct(product?.handle)
		} else {
			setLiked(true)
			await likeProduct(product?.handle)
		}
	}

	useEffect(() => {
		if (currentUser && product?.handle) {
			if (isProductLiked(currentUser, product?.handle)) {
				setLiked(true)
			} else {
				setLiked(false)
			}
		}
	}, [currentUser, product?.handle])

	return (
		<Box>
			<IconButton
				onClick={handleClick}
				sx={{
					color,
					'&:hover': {
						color,
					},
					...(size == 'small' ? sx.small : sx.large),
					...(liked && sx.selected),
				}}
			>
				{liked ? (
					<Favorite fontSize="small" />
				) : (
					<FavoriteBorder fontSize="small" />
				)}
			</IconButton>
		</Box>
	)
}

export default ProductLikeButton

const sx = {
	small: {},
	selected: {
		transition: 'transform 0.2s',
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
    borderColor: 'primary.main',
	},
	large: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
