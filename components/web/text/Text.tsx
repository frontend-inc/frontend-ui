import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Container, Heading } from '../..'
import { TypographyVariantsType } from '../../../types'

export type TextProps = {
	title: string
	description?: string
	label?: string
	textAlign?: 'center' | 'left'
	text: string
	textVariant?: TypographyVariantsType
	html?: boolean
}

// Call To Action
const Text: React.FC<TextProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		textVariant,
		text,
		html = false,
	} = props || {}

	return (
		<Container maxWidth="md">
			<Stack spacing={2} direction="column" sx={sx.container}>
				<Heading
					label={label}
					title={title}
					description={description}
					textAlign={textAlign}
					textVariant={textVariant}
				/>
				{html ? (
					<Typography variant="body1" color="text.primary" sx={sx.text}>
						<div dangerouslySetInnerHTML={{ __html: text }} />
					</Typography>
				) : (
					<Typography variant="body1" color="text.primary" sx={sx.text}>
						{text}
					</Typography>
				)}
			</Stack>
		</Container>
	)
}

export default Text

const sx = {
	container: {
		px: {
			md: 12,
			sm: 8,
			xs: 0,
		},
	},
	text: {
		whiteSpace: 'pre-wrap',
		textAlign: 'justify',
	},
}
