import React from 'react'
import { Box } from '@mui/material'

type VideoPlayerProps = {
	src: string
	height: number
	width: number
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
	const { src, height, width } = props

	return (
		<Box
			sx={{
				...sx.root,
				maxWidth: `${width}px`,
				maxHeight: `${height}px`,
			}}
		>
			<video src={src} controls height={height} width={width} />
		</Box>
	)
}

export default VideoPlayer

const sx = {
	root: {
		width: '100%',
		height: '100%',
	},
}
