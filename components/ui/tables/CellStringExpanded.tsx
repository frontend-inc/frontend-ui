import React from 'react'
import { Typography } from '@mui/material'
import { TypographyVariants } from '../../../types'

type CellStringProps = {
	value: string
	variant?: TypographyVariants
}

const CellStringExpanded: React.FC<CellStringProps> = (props) => {
	const { value, variant = 'body2' } = props
	return (
		<Typography variant={variant} sx={sx.text}>
			{value}
		</Typography>
	)
}

export default CellStringExpanded

const sx = {
	text: {
		whiteSpace: 'pre-wrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		overflowWrap: 'break-word',
	},
}
