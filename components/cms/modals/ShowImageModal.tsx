import React from 'react'
import { Image, MediaModal } from '../..'
import { useResourceContext } from 'frontend-js'
import { Box } from '@mui/material'

export type ShowImageModalProps = {
	enableGradient?: boolean
}

const ShowImageModal: React.FC<ShowImageModalProps> = (props) => {
	const { openShow, setOpenShow, resource } = useResourceContext()

	const { enableGradient } = props || {}

	if (!resource) return null
	return (
		<MediaModal open={openShow} handleClose={() => setOpenShow(false)}>
			<Box sx={sx.imageContainer}>
				<Image
					src={resource?.image?.url}
					height={800}
					enableGradient={enableGradient}
				/>
			</Box>
		</MediaModal>
	)
}

export default ShowImageModal

const sx = {
	imageContainer: {
		width: '100%',
		minWidth: 'calc(50vw)',
	},
}
