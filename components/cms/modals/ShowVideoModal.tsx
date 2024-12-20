'use client'

import React from 'react'
import { VideoModal } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowVideoModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
}

const ShowVideoModal: React.FC<ShowVideoModalProps> = (props) => {

  const { openShow, setOpenShow, resource } = useResourceContext()

	if (!resource?.video?.url) return null
	return (
		<VideoModal
			open={openShow}
			handleClose={() => setOpenShow(false)}
			src={resource?.video?.url}
		/>
	)
}

export default ShowVideoModal
