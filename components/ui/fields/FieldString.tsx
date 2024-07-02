import React from 'react'
import { Typography } from '@mui/material'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldString: React.FC<FieldElementProps> = (props) => {
	const {
		value,
		label,
		color = 'text.primary',
		placeholder,
		variant = 'body1',
		...rest
	} = props

	return (
		<FieldWrapper label={label} color={color} {...rest}>
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
