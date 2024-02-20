import React from 'react'
import { Image as ImageIcon } from '@mui/icons-material'
import { Avatar } from '@mui/material'

type EmptyImageProps = {
	height: number
	width?: number
}

const EmptyImage: React.FC<EmptyImageProps> = (props) => {
	const { height = 64, width } = props

	return (
		<Avatar
			sx={{
				...sx.avatar,
				height: `${height}px`,
				width: width ? `${width}px` : '100%',
			}}
			variant="rounded"
		>
			<ImageIcon sx={sx.icon} />
		</Avatar>
	)
}

export default EmptyImage

const sx = {
	avatar: {
		bgcolor: 'background.paper',
	},
	icon: {
		color: 'divider',
	},
}
