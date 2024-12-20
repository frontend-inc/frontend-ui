'use client'

import React from 'react'
import { ImageModal } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowImageModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
	enableGradient?: boolean
}

const ShowImageModal: React.FC<ShowImageModalProps> = (props) => {
  
  const { openShow, setOpenShow, resource } = useResourceContext()

	const { enableGradient } = props || {}

	if (!resource?.image?.url) return null
	return (
		<ImageModal
			open={openShow}
			handleClose={() => setOpenShow(false)}
			src={resource?.image?.url}
			title={resource?.title}
			enableGradient={enableGradient}
		/>
	)
}

export default ShowImageModal
