import React, { useState } from 'react'
import { CoverCard, VideoModal } from '../..'
import { CardProps } from '../../../types'
import { VIDEO_VERT_HEIGHT, VIDEO_VERT_WIDTH } from '../../../constants/index'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
		objectFit = 'cover',
		height = VIDEO_VERT_HEIGHT,
		width = VIDEO_VERT_WIDTH,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleItemClick = () => {
		setOpen(true)
	}

	return !open ? (
		<CoverCard
			actions={actions}
			resource={resource}
			handleClick={handleItemClick}
			objectFit={objectFit}
			height={height}
			width={width}
			displayFields={[]}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
			icon="PlayCircle"
		/>
	) : (
		<VideoModal
			open={open}
			title={resource?.title}
			src={resource?.video}
			handleClose={() => setOpen(false)}
		/>
	)
}

export default VideoVert
