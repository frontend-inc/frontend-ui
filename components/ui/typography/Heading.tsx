import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

type HeadingProps = {
	text: string
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
	description?: string
	flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	textAlign?: 'left' | 'center' | 'right' | 'justify' | undefined
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		text,
		description,
		variant = 'body1',
		color = 'text.primary',
		textAlign,
	} = props || {}

	return (
		<Stack sx={sx.stack} direction={'column'} spacing={1}>
			<Typography
				variant={variant}
				color={color}
				style={{
					textAlign,
				}}
			>
				{text}
			</Typography>
			<Typography
				variant="body1"
				color={'text.secondary'}
				style={{
					textAlign,
				}}
			>
				{description}
			</Typography>
		</Stack>
	)
}

export default Heading

const sx = {
	stack: {
		width: '100%',
	},
	content: {
		maxWidth: '600px',
	},
}
