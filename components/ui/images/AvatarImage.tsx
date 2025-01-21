'use client'

import React from 'react'
import { cn, Image } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'

export type AvatarImageProps = {
	src?: string
	alt: string
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {
	const { src, alt } = props

	return (
		<div className="p-4 h-full w-full flex aspect-square items-center justify-center relative overflow-hidden">
			{!src ? (
				<div className="rounded-full aspect-square w-full bg-gradient-to-br from-black to-gray-600" />
			) : (
				<Image
					src={src}
					alt={alt}
					radius="full"
					className="aspect-square w-full object-cover"
				/>
			)}
		</div>
	)
}

export default AvatarImage
