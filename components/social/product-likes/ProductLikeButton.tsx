'use client'

import React, { useEffect, useState } from 'react'
import { isProductLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Heart } from 'lucide-react'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'

type ProductLikeButtonProps = {
	product: any
	size?: 'small' | 'large'
	color?: string
	numLikes?: number
}

export default function ProductLikeButton({
	product,
	size = 'small',
}: ProductLikeButtonProps) {
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
			setLiked(isProductLiked(currentUser, product?.handle))
		}
	}, [currentUser, product?.handle])

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					size === 'large' && 'border border-divider',
					'transition-transform duration-200',
					liked && 'text-primary hover:text-primary-dark'
				)}
			>
				<Heart
					className={cn(
						'w-5 h-5 text-foreground',
						liked ? 'fill-primary stroke-primary' : 'fill-none stroke-current'
					)}
				/>
			</IconButton>
		</div>
	)
}
