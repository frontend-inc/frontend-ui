import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Icon } from '../..'
import { useAuth } from 'frontend-js'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp, useSocial } from '../../../hooks'
import { isShopifyFavorite } from '../../../helpers'

type ShopifyProductFavoriteButtonProps = {
	product: ShopifyProductType
}

const ShopifyProductFavoriteButton: React.FC<
	ShopifyProductFavoriteButtonProps
> = (props) => {
	const { product } = props

	const { setAuthOpen } = useApp()
	const { currentUser } = useAuth()

	const [isFavorite, setIsFavorite] = useState(false)

	const { shopifyFavorite, shopifyUnfavorite } = useSocial()

	const handleClick = async () => {
		if (!currentUser?.id) return setAuthOpen(true)
		if (isFavorite) {
			setIsFavorite(false)
			shopifyUnfavorite(product.handle)
		} else {
			setIsFavorite(true)
			shopifyFavorite(product.handle)
		}
	}

	useEffect(() => {
		setIsFavorite(isShopifyFavorite(currentUser, product.handle))
	}, [currentUser?.id, product?.handle])

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

export default ShopifyProductFavoriteButton

const sx = {
	button: {
		minWidth: '44px',
		p: 0,
		borderRadius: 1,
	},
}
