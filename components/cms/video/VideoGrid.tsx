import React, { useState } from 'react'
import { CoverCard, VideoModal } from '../..'
import { CardProps } from '../../../types'
import { VIDEO_HORIZ_HEIGHT, VIDEO_HORIZ_WIDTH } from '../../../constants/index'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
		height = VIDEO_HORIZ_HEIGHT,
		width = VIDEO_HORIZ_WIDTH,
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
			resource={resource}
			handleClick={handleresourceClick}
			height={height}
			width={width}
			displayFields={[]}
			enableGradient={enableGradient}
			enableOverlay={enableOverlay}
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
