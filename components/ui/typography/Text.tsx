import React from 'react'
import { Typography } from '@mui/material'

type TextProps = {
	children: string
	variant?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'caption'
		| 'button'
		| 'overline'
		| undefined
	color?: string
	textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined
}

const Text: React.FC<TextProps> = (props) => {
	
  const {
		children,
		variant = 'body1',
		color = 'text.primary',
		textAlign,
	} = props || {}

	return (
		<Typography
			variant={variant}
			color={color}
			sx={{
        ...sx.root,
				textAlign,
			}}
		>
			{children}
		</Typography>
	)
}

export default Text

const sx = {
  root: {
    whiteSpace: 'pre-wrap',
  }
}