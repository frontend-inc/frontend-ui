'use client'

import React from 'react'
import { cn, Image } from '@nextui-org/react'

export type AvatarImageProps = {
	src?: string
	alt: string
  className?: string
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {
	const { src, alt, className } = props

	return (
		<div className={cn(
      "p-4 h-full w-full flex aspect-square items-center justify-center relative overflow-hidden",
      className
    )}>
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
