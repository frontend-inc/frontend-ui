import React from 'react'
import { Chip } from '@mui/material'

type LabelProps = {
	label?: string
  color?: string
	styles?: React.CSSProperties
}

const Label: React.FC<LabelProps> = (props) => {
	const { 
    label, 
    color='secondary.main', 
    styles 
  } = props

	if (!label) return null
	return (
		<Chip
			label={label}
			sx={{
				...sx.chip,
        bgcolor: color,
				...styles,
			}}
			size="small"
		/>
	)
}

export default Label

const sx = {
	chip: {
		opacity: 0.8,
		color: 'secondary.contrastText',
		characterSpacing: '1em',
		fontWeight: 500,
		fontFamily: (theme) => theme.typography.fontFamily.caption,
		letterSpacing: '0.05em',
		cursor: 'pointer',
		borderRadius: '4px',
		boxShadow: '1px 0px 0 0 rgba(0,0,0,0.1)',
	},
}
