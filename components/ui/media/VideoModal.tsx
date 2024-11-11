'use client'

import React from 'react'
import { MediaModal } from '../..'

export type VideoModalProps = {
	open: boolean
	handleClose: () => void
	src: string
}

const VideoModal: React.FC<VideoModalProps> = (props) => {
	const { open, handleClose, src } = props || {}

  if(!src) return null;
	return (
		<MediaModal open={open} handleClose={handleClose}>
			<div className="w-full min-w-[80vw]">
				<video
					src={src}
					controls
					height={'100%'}
					width="100%"
				/>
			</div>
		</MediaModal>
	)
}

export default VideoModal
