import React from 'react'
import { Image } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'
import { NO_IMAGE_URL } from '../../../constants'

export type ImageCardProps = {
	src: string
	alt?: string
	label?: string
	handleClick?: () => void
	height?: number
	width?: number
	fullWidth?: boolean
	isBlurred?: boolean
	isZoomed?: boolean
	disableBorderRadius?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	objectFit?: 'contain' | 'cover'
	radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
	className?: string
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
	const {
		src,
		alt,
		label,
		handleClick,
		isBlurred,
		isZoomed = false,
		disableBorderRadius = false,
		enableGradient,
		enableOverlay,
    height=0,
    width=0,
		className,
		objectFit = 'cover',
		radius = 'large',
	} = props || {}

	const radiusClasses = {
		none: 'rounded-none',
		small: 'rounded-small',
		medium: 'rounded-medium',
		large: 'rounded-large',
		full: 'rounded-full',
	}

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div
				onClick={handleClick ? handleClick : undefined}
				className={cn(
					'w-full h-full',
					handleClick ? 'cursor-pointer' : '',
					disableBorderRadius ? 'rounded-none' : radiusClasses[radius],
					'overflow-hidden',
					'relative'
				)}
			>
				<Image
					removeWrapper
					isBlurred={isBlurred}
					isZoomed={isZoomed}
					src={src || NO_IMAGE_URL}
					alt={alt || label}
					className={cn(
						'w-full h-full',
						objectFit == 'contain' ? 'object-contain' : 'object-cover',
						className
					)}
				/>
				{enableGradient && (
					<div className="z-20 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent bg-opacity-50" />
				)}
				{enableOverlay && (
					<div className="z-20 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
				)}
				{label && (
					<div className="z-20 w-full overflow-hidden py-1 absolute left-2 top-2">
						<span className="truncate rounded-lg bg-white/70 text-black p-1 px-2 text-xs font-medium">
							{label}
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export type ImageProps = Omit<ImageCardProps, 'src'> & {
	src?: string
	aspectRatio?: number
}

const NextImage: React.FC<ImageProps> = (props) => {
	const {
		src,
		aspectRatio = 0,
		height = 512,
		width = 512,
		fullWidth,
		handleClick,
		disableBorderRadius,
		...rest
	} = props || {}

	return aspectRatio > 0 ? (
		<AspectRatio ratio={aspectRatio}>
			<ImageCard
				src={src}
				height={height}
				width={width}
				fullWidth={fullWidth}
				handleClick={handleClick}
				disableBorderRadius={disableBorderRadius}
				{...rest}
			/>
		</AspectRatio>
	) : (
		<ImageCard
			src={src}
			height={height}
			width={width}
			fullWidth={fullWidth}
			handleClick={handleClick}
			disableBorderRadius={disableBorderRadius}
			{...rest}
		/>
	)
}

export default NextImage
