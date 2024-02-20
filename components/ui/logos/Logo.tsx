import React from 'react'
import { Box } from '@mui/material'
import { LOGO_HEIGHT, LOGO_WIDTH } from '../../../constants/index'
import { CardProps } from '../../../types'
import Image from 'next/image'

const Logo: React.FC<CardProps> = (props) => {
	const {
		title,
		image = '',
		height = LOGO_HEIGHT,
		width = LOGO_WIDTH,
	} = props || {}

	return (
		<Box
			sx={{
        ...sx.root,
				height: `${height}px`,
				width: `${width}px`,
				minWidth: `${width}px`,
				minHeight: `${height}px`,
			}}
		>
			<Image
				height={height}
				width={width}
				src={image}
				alt={title}
				style={{
					width: '100%',
					objectFit: 'contain',
				}}
			/>
		</Box>
	)
}

export default Logo

const sx = {
  root: {
    p: 0.5
  }
}
