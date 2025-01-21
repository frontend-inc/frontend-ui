'use client'

import React from 'react'
import { Modal } from '../..'

export type VideoModalProps = {
	title?: string
	open: boolean
	handleClose: () => void
	src: string
}

const VideoModal: React.FC<VideoModalProps> = (props) => {
	const { title, open, handleClose, src } = props || {}

	if (!src) return null
	return (
		<Modal title={title} open={open} handleClose={handleClose} maxWidth={'5xl'}>
			<div className="w-full h-full flex justify-center items-center">
				<video src={src} controls height={'100%'} width="100%" />
			</div>
		</Modal>
	)
}

export default VideoModal
