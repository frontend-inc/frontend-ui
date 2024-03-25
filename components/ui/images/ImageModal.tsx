import React from 'react'
import { useAlerts } from '../../../hooks'
import { Modal } from '../../../components'
import { Box, Button } from '@mui/material'
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

	const { showAlertSuccess } = useAlerts()

	const handleCopyUrlClick = () => {
		copy(image?.url)
		showAlertSuccess('Asset URL copied to clipboard')
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
			disablePadding
			actions={
				<>
					<Button onClick={handleCopyUrlClick}>Copy URL</Button>
					<Button variant="contained" onClick={handleDownloadClick}>
						Download
					</Button>
				</>
			}
		>
			<Box sx={sx.root}>
				<Image
					alt="Image"
					src={image?.url}
					height={image?.height || 500}
					width={image?.width || 500}
					style={{
						width: '100%',
						objectFit: 'contain',
					}}
				/>
			</Box>
		</Modal>
	)
}

export default ImageModal

const sx = {
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
