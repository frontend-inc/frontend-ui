import React from 'react'
import { Box, Chip } from '@mui/material'
import { FieldWrapper } from '../../../components'

type FieldArrayProps = {
	value?: any[]
	label?: string
	rest?: any
	color?: string
}

const FieldArray: React.FC<FieldArrayProps> = (props) => {
	const { value: values, color, label, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Box sx={sx.stack}>
				{Array.isArray(values) &&
					values?.map((value, index) => (
						<Chip key={index} label={value} sx={sx.chip} size="small" />
					))}
			</Box>
		</FieldWrapper>
	)
}

export default FieldArray

const sx = {
	chip: {
		fontFamily: (theme) => theme.typography.button.fontFamily,
		letterSpacing: 0,
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	stack: {
		display: 'flex',
		flexWrap: 'wrap',
    gap: '8px'
	},
}
