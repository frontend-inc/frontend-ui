import React, { useState } from 'react'
import { AvatarCard, VideoModal } from '../..'
import { CardProps } from '../../../types'

const VideoVert: React.FC<CardProps> = (props) => {
	const {
		actions,
		resource,
		height = 80,
		width = 80,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const { video, title } = resource || {}

	const [open, setOpen] = useState(false)

	const handleItemClick = () => {
		setOpen(true)
	}

	return(
    <>
      <AvatarCard
        actions={actions}
        resource={resource}
        handleClick={handleItemClick}
        height={height}
        width={width}
        displayFields={[]}
        enableGradient={enableGradient}
        enableOverlay={enableOverlay}
      />
      <VideoModal
        open={open}
        title={title}
        src={video}
        handleClose={() => setOpen(false)}
      />
    </>
	)
}

export default VideoVert
