'use client'

import React, { useState } from 'react'
import NextImage from 'next/image'
import { AspectRatio } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'
import { truncate } from '../../../helpers'
import { 
  Card,
  CardHeader,
  CardBody,
  Image as NextUIImage 
} from '@nextui-org/react'

export interface ResponsiveImageProps {
	src?: string | null
	alt?: string
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
	label?: string
}

export default function ResponsiveImage(props: ResponsiveImageProps) {
	const {
		src,
		alt='Image',
		width = 1600,
		height = 1600,
		objectFit = 'cover',
		aspectRatio = 1.0,
		enableOverlay = false,
		enableGradient = false,
		disableBorderRadius = false,
		disableZoom = false,
		handleClick,
		className,
		label,
	} = props

	const [isHovered, setIsHovered] = useState(false)

	return (
		<Card 
      isPressable={ handleClick ? true : false }
			className={cn(
				'w-full h-full',
				'relative overflow-hidden',
        !disableBorderRadius && 'rounded-lg',
				className
			)}
			onPress={handleClick ? handleClick : undefined}
		>      
        {label && (
					<Badge
						variant="ghost"
						className="absolute font-medium px-2 py-1 uppercase text-xs tracking-wider top-3 left-3 bg-opacity-20 backdrop-blur-md text-foreground border-none"
					>
						{truncate(label, 14)}
					</Badge>
				)}
				{src ? (
					<NextUIImage
          removeWrapper
            isZoomed={ !disableZoom } 
            as={ NextImage }
						src={src}
						alt={alt}
						width={width}
						height={height}
						className={{
							img: objectFit == 'cover' ? 'object-cover' : 'object-contain',
            }}
					/>
				) : (
					<div
						className={cn(
							!disableBorderRadius && 'rounded-lg',
							'h-full w-full bg-gradient-to-br from-black to-gray-600'
						)}
					/>
				)}				
		</Card>
	)
}
