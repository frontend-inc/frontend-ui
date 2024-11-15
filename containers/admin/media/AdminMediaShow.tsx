'use client'

import React from 'react'
import { useToast } from '../../../hooks'
import { Image, Modal } from '../../../components'
import { Button } from '../../../components/core'
import copy from 'copy-to-clipboard'

type AdminMediaShowProps = {
	open: boolean
	resource: any
	handleClose: () => void
}

const AdminMediaShow: React.FC<AdminMediaShowProps> = (props) => {
	const { open, resource, handleClose } = props
	const { showAlertSuccess } = useToast()

	const handleCopyUrlClick = () => {
		copy(resource.url)
		showAlertSuccess('Asset URL copied to clipboard')
	}

	const handleDownloadClick = () => {
		window.open(resource.url, '_blank')
	}

	const VIDEO_REGEX = /video/
	const IMAGE_REGEX = /image/

	return (
		<Modal
			open={open}
			handleClose={handleClose}
			maxWidth="md"
			buttons={
				<>
					<Button color="secondary" onClick={handleCopyUrlClick}>
						Copy URL
					</Button>
					<Button onClick={handleDownloadClick}>Download</Button>
				</>
			}
		>
			<div className="w-full h-full">
				{IMAGE_REGEX.test(resource?.content_type) && (
					<Image
						alt={resource?.public_id}
						src={resource.url}
						aspectRatio={4 / 3}
					/>
				)}
				{VIDEO_REGEX.test(resource?.content_type) && (
					<video src={resource.url} controls muted autoPlay />
				)}
			</div>
		</Modal>
	)
}

export default AdminMediaShow
