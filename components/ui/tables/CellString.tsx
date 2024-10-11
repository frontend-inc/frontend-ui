import React from 'react'
import { Typography } from '../../../tailwind'
import { TypographyVariantsType } from '../../../types'

type CellStringProps = {
	value: string
	variant?: TypographyVariantsType
}

const CellString: React.FC<CellStringProps> = (props) => {
	const { value, variant = 'body2' } = props
	return (
		<Typography variant={variant}>
			{value}
		</Typography>
	)
}

export default CellString
