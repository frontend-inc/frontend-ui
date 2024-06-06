import React from 'react'
import { FieldString } from '../..'
import { TypographyVariantsType } from '../../../types'

type FieldLocationProps = {
	value?: any
	label?: string
	placeholder?: string
	variant?: TypographyVariantsType
	color?: string
	rest?: any
}

const FieldLocation: React.FC<FieldLocationProps> = (props) => {
	const { value, label, variant, color, placeholder, ...rest } = props
	return (
		<FieldString
			variant={variant}
			value={value}
			label={label}
			color={color}
			placeholder={placeholder}
			{...rest}
		/>
	)
}

export default FieldLocation
