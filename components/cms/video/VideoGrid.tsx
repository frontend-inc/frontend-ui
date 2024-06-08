import React, { useState } from 'react'
import { CoverCard, VideoModal } from '../..'
import { CardProps } from '../../../types'
import { VIDEO_HORIZ_HEIGHT, VIDEO_HORIZ_WIDTH } from '../../../constants/index'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
		objectFit = 'cover',
		height = VIDEO_HORIZ_HEIGHT,
		width = VIDEO_HORIZ_WIDTH,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleresourceClick = () => {
		setOpen(true)
	}

	return !open ? (
		<CoverCard
			actions={actions}
			variant="list"
			resource={resource}
			handleClick={handleresourceClick}
			objectFit={objectFit}
			height={height}
			width={width}
      displayFields={[]}
			enableBorder={enableBorder}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
			icon="PlayCircle"
		/>
	) : (
		<VideoModal
			title={resource?.title}
			src={resource?.video}
			open={open}
			handleClose={() => setOpen(false)}
		/>
	)
}

export default VideoVert
