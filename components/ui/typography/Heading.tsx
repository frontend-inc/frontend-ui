import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

type HeadingProps = {
	label?: string
	title?: string
	description?: string
	textAlign?: 'left' | 'center'
	textVariant?: TypographyVariantsType
}

const Heading: React.FC<HeadingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		textVariant = 'h6',
	} = props || {}

	return (
		<Stack sx={sx.stack} direction={'column'} spacing={0}>
			{label && (
				<Typography color="text.secondary" variant="caption">
					{label}
				</Typography>
			)}
			{title && (
				<Typography
					variant={textVariant}
					color="text.primary"
					style={{
						...sx.text,
						textAlign,
					}}
				>
					{title}
				</Typography>
			)}
			{description && (
				<Typography
					variant="body1"
					color="text.secondary"
					style={{
						...sx.text,
						textAlign,
					}}
				>
					{description}
				</Typography>
			)}
		</Stack>
	)
}

export default Heading

const sx = {
	stack: {
		width: '100%',
		pb: 3
	},
	text: {
		width: '100%',
	},
}
