'use client'

import React from 'react'
import { Image, MediaModal } from '../..'
import { cn } from 'frontend-shadcn'

export type ImageModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
	enableGradient?: boolean
}

const ImageModal: React.FC<ImageModalProps> = (props) => {
	const { open, handleClose, resource, enableGradient } = props || {}

	if (!resource) return null
	return (
		<MediaModal open={open} handleClose={handleClose}>
			<div className={cn('w-full min-w-[80vw]')}>
				<Image
					alt={resource?.title}
					aspectRatio={16 / 9}
					src={resource?.image?.url}
					enableGradient={enableGradient}
				/>
			</div>
		</MediaModal>
	)
}

export default ImageModal
