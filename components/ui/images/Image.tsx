'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AspectRatio } from '../../../shadcn/ui/aspect-ratio'
import { cn } from '../../../shadcn/lib/utils'

interface ResponsiveImageProps {
	src: string
	alt: string
	width?: number
	height?: number
  objectFit?: 'cover' | 'contain'
	aspectRatio?: number
	enableOverlay?: boolean
	enableGradient?: boolean
	disableBorderRadius?: boolean
  disableZoom?: boolean
	className?: string
  handleClick?: () => void
}

export default function ResponsiveImage({
	src,
	alt,
	width = 800,
	height = 450,
  objectFit='cover',
	aspectRatio = 16 / 9,
	enableOverlay = false,
	enableGradient = false,
	disableBorderRadius = false,
  disableZoom = false,
  handleClick,
	className,
}: ResponsiveImageProps) {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className={cn(
        'w-full h-full',
				'relative overflow-hidden',
        !disableBorderRadius && 'rounded-lg',
				className
			)}
      onClick={ handleClick ? handleClick : undefined }
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<AspectRatio ratio={aspectRatio}>
				{src ? (
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						className={cn(
              objectFit == 'cover' ? 'object-cover' : 'object-contain',
							'w-full h-full transition-transform duration-3000 ease-in-out',
							!disableZoom && isHovered && 'scale-105'
						)}
					/>
				) : (
					<div
						className={cn(
							!disableBorderRadius && 'rounded-lg',
							'h-full w-full bg-gradient-to-br from-black to-gray-600'
						)}
					/>
				)}        
        {enableOverlay && (
				<div className="absolute inset-0 bg-black bg-opacity-40" />
        )}
        {enableGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
        )}
			</AspectRatio>			
		</div>
	)
}
