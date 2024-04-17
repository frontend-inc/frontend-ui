import React from 'react'
import { Box } from '@mui/material'

type NoImageProps = {
	height?: number
	width?: number
	enableBorder?: boolean,
  disableBorderRadius?: boolean,
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { 
    height = 100, 
    width, 
    enableBorder,
    disableBorderRadius 
  } = props

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.enableBorder),
        ...(disableBorderRadius && sx.disableBorderRadius),
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
    borderRadius: 1,
		backgroundImage: 'linear-gradient(45deg, #999999,#DDDDDD,#FAFAFA)',
	},
	enableBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
  disableBorderRadius: {
    borderRadius: 0,
  }
}
