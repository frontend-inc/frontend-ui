import React from 'react'
import { Box } from '@mui/material'
import { Icon } from '../../../components'

type AttachmentImageProps = {
  icon?: string
	height: number
	width?: number
}

const AttachmentImage: React.FC<AttachmentImageProps> = (props) => {
	const { height = 64, width=64, icon='File' } = props

	return (
		<Box
			sx={{
				...sx.image,
				height: `${height}px`,
				width: width ? `${width}px` : '100%',
			}}
		>
			<Icon name={icon} size={24} />
		</Box>
	)
}

export default AttachmentImage

const sx = {
	image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
		bgcolor: 'background.paper',
	},	
}
