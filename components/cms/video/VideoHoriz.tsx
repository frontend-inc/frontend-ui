import React, { useState } from 'react'
import { Cover, VideoModal } from '../..'
import { CardProps } from '../../../types'
import { VIDEO_HORIZ_HEIGHT, VIDEO_HORIZ_WIDTH } from '../../../constants/index'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		editing,
		title,
		image = '',
		video = '',
		buttonText,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = VIDEO_HORIZ_HEIGHT,
		width = VIDEO_HORIZ_WIDTH,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleItemClick = () => {
		setOpen(true)
	}

	return !open ? (
		<Cover
      direction="column"
			title={title}
			image={image}
			handleClick={handleItemClick}
			buttonText={buttonText}
			textVariant={textVariant}
			objectFit={objectFit}
			height={height}
			width={width}
			enableBorder={enableBorder}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
			icon="PlayCircle"
		/>
	) : (
		<VideoModal
			title={title}
			src={video}
			open={open}
			handleClose={() => setOpen(false)}
		/>
	)
}

export default VideoVert
