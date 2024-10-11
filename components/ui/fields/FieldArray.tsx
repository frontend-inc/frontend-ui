import React from 'react'
import { Box, Chip } from '../../../tailwind'
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
			<div sx={sx.stack}>
				{Array.isArray(values) &&
					values?.map((value, index) => (
						<Chip key={index} label={value} sx={sx.chip} size="small" />
					))}
			</div>
		</FieldWrapper>
	)
}

export default FieldArray
