import React, { useEffect, useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { isProductFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { Bookmark, BookmarkBorder } from '@mui/icons-material'

type ProductFavoriteButtonProps = {
	product: any
	size?: 'small' | 'large'
	color?: string
	numFavorites?: number
}

const ProductFavoriteButton: React.FC<ProductFavoriteButtonProps> = (props) => {
	const {
		product,
		size = 'small',
		color = 'text.secondary',
		numFavorites,
	} = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [isFavorite, setIsFavorite] = useState(false)

	const { favoriteProduct, unfavoriteProduct } = useSocial()

	const handleClick = async (ev) => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (isFavorite) {
			setIsFavorite(false)
			await unfavoriteProduct(product?.handle)
			fetchMe()
		} else {
			setIsFavorite(true)
			await favoriteProduct(product?.handle)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && product?.handle) {
			if (isProductFavorited(currentUser, product?.handle)) {
				setIsFavorite(true)
			} else {
				setIsFavorite(false)
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
					...(size === 'small' ? sx.small : sx.large),
					...(isFavorite && sx.selected),					
				}}
			>
				{isFavorite ? (
					<Bookmark fontSize="small" />
				) : (
					<BookmarkBorder fontSize="small" />
				)}
			</IconButton>
		</Box>
	)
}

export default ProductFavoriteButton

const sx = {
	small: {},
	selected: {
		color: 'primary.main',
		'&:hover': {
			color: 'primary.dark',
		},
    borderColor: 'primary.main',
	},
	large: {
		border: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.main',
		color: 'text.secondary',
		'&:hover': {
			bgcolor: 'background.main',
			color: 'text.secondary',
		},
	},	
}
