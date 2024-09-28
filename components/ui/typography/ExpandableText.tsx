import React, { useState } from 'react'
import { Stack, Typography, Link } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

const MAX_CHARS = 200

type ExpandableTextProps = {
	text: string
  variant?: TypographyVariantsType
	maxChars?: number
	color?: string
}

const ExpandableText: React.FC<ExpandableTextProps> = (props) => {
	const { text, color = 'text.primary', variant='body1', maxChars = MAX_CHARS } = props || {}
	const [open, setOpen] = useState(false)
	return (
		<Stack direction="column" spacing={0}>
			{open ? (
				<Typography variant={variant} color={color} sx={sx.text}>
					{text}
				</Typography>
			) : (
				<Typography variant={variant} color={color} sx={sx.text}>
					{text?.slice(0, maxChars)}
				</Typography>
			)}
			{text?.length > maxChars && (
				<Link onClick={() => setOpen(!open)} sx={sx.link}>
					{open ? 'See less' : '... See all'}
				</Link>
			)}
		</Stack>
	)
}

export default ExpandableText

const sx = {
	text: {
		width: '100%',
		whiteSpace: 'pre-line',
	},
	link: {
		cursor: 'pointer',
		color: 'text.secondary',
	},
}
