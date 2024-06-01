import React, { useState } from 'react'
import { AvatarCard, VideoModal } from '../..'
import { CardProps } from '../../../types'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
		objectFit = 'cover',
		height = 80,
		width = 80,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const { label, image, video, title } = resource || {}

	const [open, setOpen] = useState(false)

	const handleItemClick = () => {
		setOpen(true)
	}

	return !open ? (
		<AvatarCard
			actions={actions}
			variant="grid"
			resource={resource}
			handleClick={handleItemClick}
			objectFit={objectFit}
			height={height}
			width={width}
			enableBorder={enableBorder}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
		/>
	) : (
		<VideoModal
			open={open}
			title={title}
			src={video}
			handleClose={() => setOpen(false)}
		/>
	)
}

export default VideoVert
