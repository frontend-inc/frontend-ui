'use client'

import React from 'react'
import { VideoModal } from '../..'

export type VideoModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
}

const ResourceVideoModal: React.FC<VideoModalProps> = (props) => {
	const { open, handleClose, resource } = props || {}

  if(!resource?.video?.url) return null
	return (
		<VideoModal 
      open={open} 
      handleClose={handleClose}
      src={resource?.video?.url}
    />
	)
}

export default ResourceVideoModal
