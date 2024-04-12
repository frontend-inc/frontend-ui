import React from 'react'
import { Box } from '@mui/material'

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
		></Box>
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
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
	icon: {
		color: 'divider',
	},
	rounded: {
		borderRadius: 1,
	},
	enableBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
