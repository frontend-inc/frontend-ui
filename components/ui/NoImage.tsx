import React from 'react'
import { Box } from '@mui/material'
import { Image as ImageIcon } from '@mui/icons-material'

type NoImageProps = {
	height?: number
	width?: number
	border?: boolean
	rounded?: boolean
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { height = 100, width, rounded = false, border = false } = props

	return (
		<Box
			sx={{
				...sx.root,
				...(border && sx.enableBorder),
				...(rounded && sx.rounded),
				height: height ? `${height}px` : '100%',
				width: width ? `${width}px` : '100%',
			}}
		>
			<ImageIcon sx={sx.icon} />
		</Box>
	)
}

export default NoImage

const sx = {
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: theme => theme.shape.borderRadius,
		backgroundColor: 'background.paper',
	},
	icon: {
		color: 'divider',
	},
	rounded: {
		borderRadius: (theme) => theme.shape.borderRadius,
	},
	enableBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
