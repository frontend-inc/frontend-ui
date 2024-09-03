import React from 'react'
import { useAlerts } from '../../../hooks'
import { Modal } from '../../../components'
import { Box, Button } from '@mui/material'
import copy from 'copy-to-clipboard'
import Image from 'next/image'

type AdminMediaShowProps = {
	open: boolean
	resource: any
	handleClose: () => void
}

const AdminMediaShow: React.FC<AdminMediaShowProps> = (props) => {
	const { open, resource, handleClose } = props
	const { showAlertSuccess } = useAlerts()

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
			title={resource?.filename}
			maxWidth="md"
			disablePadding
			buttons={
				<>
					<Button
						color="secondary"
						variant="contained"
						onClick={handleCopyUrlClick}
					>
						Copy URL
					</Button>
					<Button variant="contained" onClick={handleDownloadClick}>
						Download
					</Button>
				</>
			}
		>
			<Box sx={sx.root}>
				{IMAGE_REGEX.test(resource?.content_type) && (
					<Image
						alt={resource?.public_id}
						src={resource.url}
						height={resource.height || 500}
						width={resource.width || 500}
						layout="responsive"
						style={{
							maxWidth: '640px',
							maxHeight: '640px',
							objectFit: 'contain',
						}}
					/>
				)}
				{VIDEO_REGEX.test(resource?.content_type) && (
					<video src={resource.url} controls muted autoPlay style={sx.video} />
				)}
			</Box>
		</Modal>
	)
}

export default AdminMediaShow

const sx = {
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '500px',
	},
	image: {
		maxHeight: '100vh',
		maxWidth: '100vw',
	},
	video: {
		width: '100%',
		height: 'auto',
		maxHeight: '100%',
	},
}
