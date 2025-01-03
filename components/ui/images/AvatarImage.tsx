'use client'

import React from 'react'
import { cn, Image } from '@nextui-org/react'

export type AvatarImageProps = {
	src?: string
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

	if (!src)
		return (
			<div
				className="rounded-full bg-gradient-to-br from-black to-gray-600"
				style={{
					width: `${size}px`,
					height: `${size}px`,
				}}
			/>
		)
	return (
		<div className="relative rounded-full overflow-hidden">
			<Image
				src={src}
				alt={alt}
				height={size}
				width={size}
				radius="full"
				className="object-cover"
			/>
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
