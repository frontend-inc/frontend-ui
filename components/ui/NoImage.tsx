import React from 'react'
import { Box } from '@mui/material'

type NoImageProps = {
	height?: number
	width?: number
  darkMode?: boolean	
  disableBorder?: boolean
	disableBorderRadius?: boolean
}

const NoImage: React.FC<NoImageProps> = (props) => {
	const { darkMode=false, height = 100, width, disableBorder, disableBorderRadius } = props

	return (
		<Box
			sx={{
				...sx.root,
				...(disableBorder && sx.disableBorder),
				...(disableBorderRadius && sx.disableBorderRadius),
        ...(darkMode && sx.darkMode),
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
  darkMode: {
    backgroundImage: 'linear-gradient(45deg, #666666, #222222,#000000)'
  },
	disableBorder: {
		border: 'none',		
	},
	disableBorderRadius: {
		borderRadius: 0,
	},
}
