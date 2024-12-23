'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { AspectRatio } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'
import { truncate } from '../../../helpers'

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
		alt,
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
    <AspectRatio ratio={aspectRatio}>
		<figure
			className={cn(
				'w-full h-full',
				'relative overflow-hidden',
        !disableBorderRadius && 'rounded-lg',
				className
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleClick ? handleClick : undefined}
		>
				{src ? (
					<Image
						src={src}
						alt={alt ? alt : 'image'}
						width={width}
						height={height}
						className={cn(              
							objectFit == 'cover' ? 'object-cover' : 'object-contain',
							'w-full h-full transition-transform duration-300 ease-in-out',
							!disableZoom && isHovered && 'hover:scale-105'
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
					<div
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="absolute inset-0 bg-black bg-opacity-60"
					/>
				)}
				{enableGradient && (
					<div
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"
					/>
				)}
				{label && (
					<Badge
						variant="secondary"
						className="absolute font-medium px-2 py-1 uppercase text-xs tracking-wider top-3 left-3 bg-opacity-20 backdrop-blur-md text-foreground border-none"
					>
						{truncate(label, 14)}
					</Badge>
				)}
		</figure>
    </AspectRatio>
	)
}
