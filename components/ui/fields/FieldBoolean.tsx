import React from 'react'
import { Label, FieldWrapper } from '../../../components'

type FieldBooleanProps = {
	value?: boolean
	label?: string
	rest?: any
	color?: string
}

const FieldBoolean: React.FC<FieldBooleanProps> = (props) => {
	const { value, label, color, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Label label={value ? 'true' : 'false'} />
		</FieldWrapper>
	)
}

export default FieldBoolean