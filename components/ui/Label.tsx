import React from 'react'
import { Typography, Chip } from '@mui/material'

type LabelProps = {
	label?: string
	color?: string
	darkMode?: boolean
	styles?: React.CSSProperties
}

const Label: React.FC<LabelProps> = (props) => {
	const { label, darkMode = false, color, styles } = props

	if (!label) return null
	return (
		<Chip
			label={label}
			sx={{
				...sx.chip,
				...(darkMode && sx.darkMode),
				...(color && { bgcolor: color }),
				...styles,
			}}
			size="small"
		/>
	)
}

export default Label

const sx = {
	chip: {
		color: 'secondary.contrastText',
		bgcolor: 'secondary.main',
		cursor: 'pointer',
		borderRadius: 0.5,
		boxShadow: '1px 0px 0 0 rgba(0,0,0,0.1)',
		textTransform: 'uppercase',
	},
	darkMode: {
		bgcolor: 'background.paper',
		color: 'text.secondary',
	},
}
