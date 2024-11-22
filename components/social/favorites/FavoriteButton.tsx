'use client'

import React, { useEffect, useState } from 'react'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { RemixIcon, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

type FavoriteButtonProps = {
	resource: any
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function FavoriteButton(props: FavoriteButtonProps) {
	const { resource, size = 'small', variant = 'rounded' } = props

	const { fetchMe, currentUser } = useAuth()
	const { setAuthOpen } = useApp()

	const [isFavorite, setIsFavorite] = useState(false)

	const { favorite, unfavorite } = useSocial()

	const handleClick = async (ev: React.MouseEvent) => {
		if (!currentUser?.id) {
			return setAuthOpen(true)
		}
		if (isFavorite) {
			setIsFavorite(false)
			await unfavorite(resource?.handle)
			fetchMe()
		} else {
			setIsFavorite(true)
			await favorite(resource?.handle)
			fetchMe()
		}
	}

	useEffect(() => {
		if (currentUser && resource?.handle) {
			setIsFavorite(isFavorited(currentUser, resource?.handle))
		}
	}, [currentUser, resource?.handle])

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					variant == 'circular' ? 'rounded-full' : 'rounded-lg',
					size === 'large' && 'border border-divider',
					'transition-transform duration-200'
				)}
			>
				{isFavorite && (
					<RemixIcon name="ri-bookmark-fill" className="fill-primary" />
				)}
				{!isFavorite && <RemixIcon name="ri-bookmark-line" />}
			</IconButton>
		</div>
	)
}
