import React from 'react'
import { Chip } from '@mui/material'

type LabelProps = {
	label?: string
	styles?: React.CSSProperties
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, styles } = props

	if (!label) return null
	return (
		<Chip
			label={label}
			sx={{
				...sx.chip,
				...styles,
			}}
			size="small"
		/>
	)
}

export default Label

const sx = {
	chip: {
		color: 'text.primary',
		textTransform: 'uppercase',
		characterSpacing: '1em',
		fontSize: 11,
		fontWeight: 500,
		fontFamily: (theme) => theme.typography.fontFamily.caption,
		letterSpacing: '0.05em',
		bgcolor: 'background.paper',
		cursor: 'pointer',
	},
}
