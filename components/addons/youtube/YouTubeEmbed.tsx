import React from 'react'
import { Box } from '@mui/material'

type YouTubeEmbedProps = {
	src: string
	height?: number
	width?: number
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = (props) => {
	const { src, height = 315, width = 560 } = props

	return (
		<Box sx={sx.root}>
			<iframe
				width={width}
				height={height}
				src={src}
				frameBorder="0"
				allowFullScreen
				title="Embedded YouTube video"
				style={{
					aspectRatio: '16 / 9',
					width: '100%',
				}}
			/>
		</Box>
	)
}

export default YouTubeEmbed

const sx = {
	root: {
		width: '100%',
	},
}
