'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { AspectRatio } from 'frontend-shadcn'

type NoImageProps = {
  aspectRatio?: number
	height?: number
	width?: number
	disableBorder?: boolean
	disableBorderRadius?: boolean
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { height = 100, aspectRatio=1.0, width, disableBorder, disableBorderRadius } = props

	return (
    <AspectRatio ratio={aspectRatio}>
		<div
      className={cn(
        !disableBorderRadius && 'rounded-lg',
        'h-full w-full bg-gradient-to-br from-black to-gray-600'
      )}
    />
    </AspectRatio>
	)
}

export default NoImage
