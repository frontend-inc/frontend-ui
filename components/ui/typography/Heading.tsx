import React from 'react'
import { Stack, Typography } from '@mui/material'

type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center'
}

const Heading: React.FC<HeadingProps> = (props) => {
	const { label, title, subtitle, textAlign } = props || {}

	return (
		<Stack sx={sx.stack} direction={'column'} spacing={1}>
			{label && (
				<Typography color="primary" sx={sx.label} variant="caption">
					{label}
				</Typography>
			)}
			{title && (
				<Typography
					variant="h5"
					color="text.primary"
					style={{
						...sx.text,
						textAlign,
					}}
				>
					{title}
				</Typography>
			)}
			{subtitle && (
				<Typography
					variant="body1"
					color="text.secondary"
					style={{
						...sx.text,
						textAlign,
					}}
				>
					{subtitle}
				</Typography>
			)}
		</Stack>
	)
}

export default Heading

const sx = {
	stack: {
		width: '100%',
	},
	label: {
		color: 'primary.main',
	},
	text: {
		width: '100%',
		maxWidth: '600px',
	},
}
