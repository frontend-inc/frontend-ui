import React from 'react'
import { Chip } from '../../../tailwind'
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
			<div className="flex flex-row gap-2">
				{Array.isArray(values) &&
					values?.map((value, index) => (
						<Chip key={index} label={value} size="small" />
					))}
			</div>
		</FieldWrapper>
	)
}

export default FieldArray
