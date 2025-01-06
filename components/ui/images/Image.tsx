import React from 'react'
import { Card, CardFooter, Image } from '@nextui-org/react'
import { cn } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'
import NoImage from './NoImage'

export type ImageCardProps = {
	src: string
	alt?: string
	label?: string
	aspectRatio?: number
	handleClick?: () => void
  fullWidth?: boolean
	height?: number
  width?: number
	isBlurred?: boolean
	disableZoom?: boolean
	disableBorderRadius?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	className?: string
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
	const {
		src,
		alt,
		label,
		handleClick,
		isBlurred,
		disableZoom = false,
		disableBorderRadius = false,
    fullWidth,
		height,
    width,
		enableGradient,
		enableOverlay,
		className,
	} = props || {}

	return (
		<Card
			isFooterBlurred
			isPressable={handleClick ? true : false}
			onPress={handleClick}
			className={cn(    
        fullWidth && 'w-full',    
				disableBorderRadius ? 'rounded-none' : 'rounded-large',
				'relative'
			)}
		>
			<Image
				removeWrapper
				height={height}
        width={ !fullWidth && (width || height)}
				radius="none"
				isBlurred={isBlurred}
				isZoomed={!disableZoom}
				src={src}
				alt={alt || label}
				className={cn(
          'object-cover', 
          fullWidth && 'w-full',
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
				<CardFooter className="z-20 w-full overflow-hidden py-1 absolute left-0 bottom-0 text-white text-sm">
					<div className="truncate p-4">{label}</div>
				</CardFooter>
			)}
		</Card>
	)
}

export type ImageProps = Omit<ImageCardProps, 'src'> & {
	src?: string
	aspectRatio?: number
}

const NextImage: React.FC<ImageProps> = (props) => {
	const {
		src,
		height,
    width,
		aspectRatio,
		handleClick,
		disableBorderRadius,
		...rest
	} = props || {}

	if (!src)
		return (
			<NoImage
				disableBorderRadius={disableBorderRadius}
				aspectRatio={aspectRatio}
				height={height}
        width={width}
				onClick={handleClick}
			/>
		)
	return aspectRatio ? (
		<AspectRatio ratio={aspectRatio}>
			<ImageCard
				src={src}
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
			handleClick={handleClick}
			disableBorderRadius={disableBorderRadius}
			{...rest}
		/>
	)
}

export default NextImage
