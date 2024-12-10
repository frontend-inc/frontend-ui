'use client'

import React from 'react'
import {
	Avatar as ShadcnAvatar,
	AvatarImage,
	AvatarFallback,
} from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type AvatarProps = {
  alt?: string
	src?: string
	variant?: 'circular' | 'rounded'
	label?: string
	size?: number
	color?: string
	className?: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

export default function Avatar(props: AvatarProps) {

  const {
    src,
    alt,
    label,
    variant = 'rounded',
    size = 40,
    className,
  } = props || {}

	const avatarClasses = cn(
		variant === 'circular' ? 'rounded-full' : 'rounded-lg'
	)

	return (
		<ShadcnAvatar
			className={cn(avatarClasses, className)}
			style={{
				width: size,
				height: size,
			}}
      alt={alt}
		>
			<AvatarImage src={src} alt="Avatar" className="object-cover" />
			<AvatarFallback
				className={cn(avatarClasses, 'bg-primary text-primary-foreground')}
			>
				{label ? label.slice(0, 2) : null}
			</AvatarFallback>
		</ShadcnAvatar>
	)
}
