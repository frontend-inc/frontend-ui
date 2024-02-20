import React from 'react'
import { Chip } from '@mui/material'
import { FieldWrapper } from '../../../components'

type FieldArrayProps = {
	value?: any[]
	label?: string
	rest?: any
}

const FieldArray: React.FC<FieldArrayProps> = (props) => {
	const { value: values, label, ...rest } = props

	return (
		<FieldWrapper label={label} {...rest}>
			{values?.map((value, index) => (
				<Chip key={index} label={value} sx={sx.chip} size="small" />
			))}
		</FieldWrapper>
	)
}

export default FieldArray

const sx = {
	chip: {
		mt: 0,
		mr: 0.5,
		mb: 0.5,
		ml: 0,
		textTransform: 'none',
		fontFamily: (theme) => theme.typography.caption.fontFamily,
		letterSpacing: 0,
	},
}
