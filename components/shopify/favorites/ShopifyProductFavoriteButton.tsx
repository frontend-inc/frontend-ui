'use client'

import React, { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'
import { Button } from '@nextui-org/react'
import { useAuth } from 'frontend-js'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp, useSocial } from '../../../hooks'
import { isShopifyFavorite } from '../../../helpers'
import { cn } from '@nextui-org/react'

type ShopifyProductFavoriteButtonProps = {
	product: ShopifyProductType
	variant?: 'rounded' | 'circular'
	size?: 'small' | 'large'
}

const ShopifyProductFavoriteButton: React.FC<
	ShopifyProductFavoriteButtonProps
> = ({ product, variant = 'rounded', size }) => {
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
      isIconOnly
			onPress={handleClick}
      size={size}			
		>
			<Heart
				className={cn(
					'w-5 h-5 text-foreground',
					isFavorite ? 'fill-primary' : 'stroke-current'
				)}
			/>
		</Button>
	)
}

export default ShopifyProductFavoriteButton
