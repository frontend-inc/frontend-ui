import React from 'react'
import { Typography } from '@mui/material'
import { FieldWrapper } from '../../../components'
import { TypographyVariantsType } from '../../../types'

type FieldStringProps = {
	value: string
	variant?: TypographyVariantsType
	label?: string
	color?: string
	placeholder?: string
	rest?: any
}

const FieldString: React.FC<FieldStringProps> = (props) => {
	const {
		value,
		label,
		color = 'text.primary',
		placeholder,
		variant = 'body1',
		...rest
	} = props

	return (
		<FieldWrapper label={label} {...rest}>
			<Typography variant={variant} color={color} sx={sx.text}>
				{value || placeholder}
			</Typography>
		</FieldWrapper>
	)
}

export default FieldString

const sx = {
	text: {
		whiteSpace: 'pre-wrap',
	},
}
