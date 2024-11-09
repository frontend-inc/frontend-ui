'use client'

import React from 'react'
import { MediaModal } from '../..'

export type VideoModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
}

const VideoModal: React.FC<VideoModalProps> = (props) => {
	const { open, handleClose, resource } = props || {}

	if (!resource) return null
	return (
		<MediaModal open={open} handleClose={handleClose}>
			<div className="w-full min-w-[80vw]">
				<video
					src={resource?.video?.url}
					controls
					height={'100%'}
					width="100%"
				/>
			</div>
		</MediaModal>
	)
}

export default VideoModal
