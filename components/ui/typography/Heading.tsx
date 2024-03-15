import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

type HeadingProps = {
	label?: string
	title?: string
	subtitle?: string
	textAlign?: 'left' | 'center'
  textVariant?: TypographyVariantsType
}

const Heading: React.FC<HeadingProps> = (props) => {
	const { 
    label, 
    title, 
    subtitle, 
    textAlign, 
    textVariant = 'h6'
  } = props || {}

	return (
		<Stack sx={sx.stack} direction={'column'} spacing={1}>
			{label && (
				<Typography color="primary" sx={sx.label} variant="caption">
					{label}
				</Typography>
			)}
			{title && (
				<Typography
					variant={ textVariant }
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
    mb: 2
	},
	label: {
		color: 'primary.main',
	},
	text: {
		width: '100%',
	},
}
