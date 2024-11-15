'use client'

import React, { useEffect, useState } from 'react'
import { isProductFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { RiBookmarkFill, RiBookmarkLine } from '@remixicon/react'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'

type ProductFavoriteButtonProps = {
	product: any
	size?: 'small' | 'large'
}

export default function ProductFavoriteButton({
	product,
	size = 'small',
}: ProductFavoriteButtonProps) {
	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [isFavorite, setIsFavorite] = useState(false)

	const { favoriteProduct, unfavoriteProduct } = useSocial()

	const handleClick = async (ev: React.MouseEvent) => {
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
			setIsFavorite(isProductFavorited(currentUser, product?.handle))
		}
	}, [currentUser, product?.handle])

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					size === 'large' &&
						'border border-divider bg-background text-secondary hover:bg-background hover:text-secondary',
					isFavorite && 'text-primary hover:text-primary-dark'
				)}
			>
        { isFavorite && <RiBookmarkFill className="fill-primary" /> }
        { !isFavorite && <RiBookmarkLine /> }								
			</IconButton>
		</div>
	)
}
