'use client'

import React, { useState } from 'react'
import { cn, Card } from '@nextui-org/react'
import { cloudinaryImageFromVideoUrl } from '../../../helpers'
import { Image, VideoModal } from '../../../components'

type VideoCardProps = {
	src: string
	image?: string
	title: string
	objectFit?: 'cover' | 'contain'
	enableOverlay?: boolean
	enableGradient?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
	const {
		src,
		image,
		enableOverlay,
		enableGradient,
		objectFit = 'cover',
    shadow='sm',
    className
	} = props || {}

	const [open, setOpen] = useState(false)
	const cloudinaryImage = cloudinaryImageFromVideoUrl(src)

	return (
		<>
			<Card
				isPressable
				onPress={() => setOpen(true)}
				className={cn(
          "w-full relative",
          className 
        )}
				shadow={ shadow }
			>
				<Image
					src={image ? image : cloudinaryImage}
					alt="video-cover"
					enableOverlay={enableOverlay}
					enableGradient={enableGradient}
					objectFit={objectFit}
					disableBorderRadius
          className={ className }
				/>
			</Card>
			<VideoModal open={open} handleClose={() => setOpen(false)} src={src} />
		</>
	)
}

export default VideoCard
