'use client'

import React, { useEffect, useState } from 'react'
import { isLiked } from '../../../helpers'
import { useSocial, useApp } from '../../../hooks'
import { useAuth } from 'frontend-js'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'
import { RiHeartFill, RiHeartLine } from '@remixicon/react'

type LikeButtonProps = {
	resource: any
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function LikeButton(props: LikeButtonProps) {

  const {
    resource,
    size = 'small',
    variant = 'rounded',
  } = props
  
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
					size === 'large' && 'border border-divider'
				)}
			>
        { liked && <RiHeartFill className="fill-primary" /> }
        { !liked && <RiHeartLine /> }				
			</IconButton>
		</div>
	)
}
