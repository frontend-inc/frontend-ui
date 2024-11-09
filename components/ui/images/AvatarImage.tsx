'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

export type AvatarImageProps = {
	src: string
	alt: string
	size?: number
	enableGradient?: boolean
	enableOverlay?: boolean
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {
	const {
		src,
		alt,
		size = 64,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<div
			className={cn(
				'relative h-[64px] rounded-full overflow-hidden',
				`h-[${size}px] w-[${size}px]`
			)}
		>
			{src ? (
				<img src={src} alt={alt} className="w-full h-full object-cover" />
			) : (
				<div
					className={`rounded-full bg-gradient-to-br from-black to-gray-600`}
					style={{ width: `${size}px`, height: `${size}px` }}
				></div>
			)}
			{enableGradient && (
				<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full" />
			)}
			{enableOverlay && (
				<div className="absolute inset-0 bg-black/50 rounded-full" />
			)}
		</div>
	)
}

export default AvatarImage
