'use client'

import React, { useEffect, useState } from 'react'
import { isFavorited } from '../../../helpers'
import { useAuth } from 'frontend-js'
import { useSocial, useApp } from '../../../hooks'
import { RemixIcon } from '../../../components'
import { cn, Button } from '@nextui-org/react'

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

	const handleClick = async () => {
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
			<Button
				isIconOnly
				onPress={handleClick}
				className={cn(
					'min-w-8',
					variant == 'circular' ? 'rounded-full' : 'rounded-lg',
					size === 'large' && 'border border-divider',
					'transition-transform duration-200'
				)}
			>
				{isFavorite ? (
					<RemixIcon name="ri-bookmark-fill" className="fill-primary" />
				) : (
					<RemixIcon name="ri-bookmark-line" />
				)}
			</Button>
		</div>
	)
}
