'use client'

import React from 'react'
import { Image, MediaModal } from '../..'
import { cn } from '@nextui-org/react'

export type ImageModalProps = {
	open: boolean
	handleClose: () => void
	title?: string
	src: string
	enableGradient?: boolean
}

const ImageModal: React.FC<ImageModalProps> = (props) => {
	const { open, handleClose, title, src, enableGradient } = props || {}

	if (!src) return null
	return (
		<MediaModal open={open} handleClose={handleClose}>
			<div className={cn('w-full min-w-[80vw]')}>
				<Image
					alt={title || 'Image'}
					aspectRatio={16 / 9}
					src={src}
					enableGradient={enableGradient}
				/>
			</div>
		</MediaModal>
	)
}

export default ImageModal
