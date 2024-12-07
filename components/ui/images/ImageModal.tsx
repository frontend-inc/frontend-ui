'use client'

import React from 'react'
import { toast } from 'sonner'
import { Modal } from '../../../components'
import { Button } from '../../../components'
import copy from 'copy-to-clipboard'
import Image from 'next/image'

type ImageModalProps = {
	open: boolean
	image: any
	title?: string
	handleClose: () => void
}

const ImageModal: React.FC<ImageModalProps> = (props) => {
	const { open, image, title = '', handleClose } = props

	const handleCopyUrlClick = () => {
		copy(image?.url)
		toast('Asset URL copied to clipboard')
	}

	const handleDownloadClick = () => {
		window.open(image?.url, '_blank')
	}

	return (
		<Modal
			open={open}
			handleClose={handleClose}
			title={title}
			maxWidth="md"
			buttons={
				<div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:sspace-x-2">
					<Button color="secondary" onClick={handleCopyUrlClick}>
						Copy URL
					</Button>
					<Button onClick={handleDownloadClick}>Download</Button>
				</div>
			}
		>
			<Image
				alt="Image"
				src={image?.url}
				height={1200}
				width={1200}
				style={{
					width: '100%',
					objectFit: 'contain',
				}}
				layout="responsive"
			/>
		</Modal>
	)
}

export default ImageModal
