import React from 'react'
import { cn, Card } from '@nextui-org/react'
import { AspectRatio } from 'frontend-shadcn'

type GradientProps = {
	disableBorderRadius?: boolean
	height?: number
  width?: number
	onClick?: () => void
}

type NoImageProps = GradientProps & {
	onClick?: () => void
	aspectRatio?: number
}

const Gradient: React.FC<GradientProps> = (props) => {
	const { disableBorderRadius, onClick, height, width } = props || {}
	return (
		<div
			onClick={onClick}
			style={{
				height: height ? `${height}px` : '100%',
        width: width ? `${width}px` : '100%',
			}}
			className={cn(
				'cursor-pointer',
				disableBorderRadius ? 'rounded-none' : 'rounded-large',
				'h-full w-full bg-gradient-to-br from-black to-gray-600'
			)}
		/>
	)
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { aspectRatio, height, width, ...rest } = props || {}

	return aspectRatio ? (
		<AspectRatio ratio={aspectRatio}>
			<Gradient {...rest} />
		</AspectRatio>
	) : (
		<Gradient 
      height={height} 
      width={width}
      {...rest} />
	)
}

export default NoImage
