import React from 'react'
import { Box } from '@mui/material'

type VimeoEmbedProps = {
	src: string
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = (props) => {
	const { src } = props

	return (
		<Box sx={sx.root}>
			<iframe
				src={src}
				width="800px"
				height="450px"
				style={{
					position: 'absolute',
					top: '0px',
					left: '0px',
					width: '100%',
					height: '100%',
				}}
				frameBorder="0"
			></iframe>
		</Box>
	)
}

export default VimeoEmbed

const sx = {
	root: {
		paddingBottom: '56.25%',
		maxWidth: '100%',
		position: 'relative',
	},
}
