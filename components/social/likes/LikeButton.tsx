'use client'

import React, { useEffect, useState } from 'react'
import { isLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { Heart } from 'lucide-react'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'

type LikeButtonProps = {
	resource: any
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function LikeButton({
	resource,
	size = 'small',
	variant = 'rounded',
}: LikeButtonProps) {
	const { currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [liked, setLiked] = useState(false)

	const { like, unlike } = useSocial()

	const handleClick = async () => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (liked) {
			setLiked(false)
			await unlike(resource?.handle)
		} else {
			setLiked(true)
			await like(resource?.handle)
		}
	}

	useEffect(() => {
		if (currentUser && resource?.handle) {
			setLiked(isLiked(currentUser, resource?.handle))
		}
	}, [currentUser, resource?.handle])

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					variant == 'circular' ? 'rounded-full' : 'rounded-lg',
					size === 'large' && 'border border-divider',
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
