import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import EmptyImage from 'assets/empty-image.svg'

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
      <Image 
        src={EmptyImage}
        height={400}
        width={400}
        alt="Missing Image"
      />
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
		bgcolor: '#EAEAEA',
	},
	icon: {
		color: 'divider',
	},
	rounded: {
    borderRadius: theme => `${theme.shape.borderRadius}px`,
	},
	enableBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
