import React, { useState } from 'react'
import { Cover, VideoModal } from '../..'
import { CardProps } from '../../../types'
import { VIDEO_VERT_HEIGHT, VIDEO_VERT_WIDTH } from '../../../constants/index'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
    item,    
		href,
		handleClick,
		objectFit = 'cover',
		height = VIDEO_VERT_HEIGHT,
		width = VIDEO_VERT_WIDTH,
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
      actions={actions}
			variant="grid"
      item={item}			
			handleClick={handleItemClick}
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
			open={open}
			title={item?.title}
			src={item?.video}
			handleClose={() => setOpen(false)}
		/>
	)
}

export default VideoVert
