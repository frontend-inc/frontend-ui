'use client'

import React, { useEffect, useState } from 'react'
import { isProductLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { RiHeartFill, RiHeartLine } from '@remixicon/react'
import { RemixIcon, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

type ProductLikeButtonProps = {
	product: any
	size?: 'small' | 'large'
	color?: string
	numLikes?: number
}

export default function ProductLikeButton(props: ProductLikeButtonProps) {
	const { product, size = 'small' } = props

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
				{liked && <RemixIcon name="ri-heart-fill" className="fill-primary" />}
				{!liked && <RemixIcon name="ri-heart-line" />}
			</IconButton>
		</div>
	)
}
