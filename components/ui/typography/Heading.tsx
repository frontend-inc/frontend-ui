import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'
import { Label } from '../../../components'

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
		textAlign = 'left',
		textVariant = 'h6',
	} = props || {}

	if (!title && !description && !label) return null
	return (
		<Stack
			sx={{
				...sx.stack,
				alignItems: {
					sm: textAlign === 'center' ? 'center' : 'flex-start',
					xs: 'center',
				},
			}}
			direction={'column'}
			spacing={1}
		>
			{label && <Label label={label} />}
			{title && (
				<Typography
					variant={textVariant}
					color="text.primary"
					sx={{
						...sx.title,
						textAlign: textAlign,
					}}
				>
					{title}
				</Typography>
			)}
			{description && (
				<Typography
					variant="body1"
					color="text.secondary"
					sx={{
						...sx.description,
						textAlign: {
							sm: textAlign,
							xs: 'center',
						},
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
		pb: 4,
		justifyContent: 'center',
		alignItems: 'center',
	},

	title: {
		width: '100%',
	},
	description: {
		width: '100%',
	},
}
