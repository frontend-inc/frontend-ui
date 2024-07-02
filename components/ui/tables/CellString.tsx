import React from 'react'
import { Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'

type CellStringProps = {
	value: string
	variant?: TypographyVariantsType
}

const CellString: React.FC<CellStringProps> = (props) => {
	const { value, variant = 'body2' } = props
	return (
		<Typography sx={sx.text} variant={variant}>
			{value}
		</Typography>
	)
}

export default CellString

const sx = {
	text: {
		whiteSpace: 'nowrap',
	},
}
