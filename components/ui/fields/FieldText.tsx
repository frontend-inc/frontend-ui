import React from 'react'
import { FieldString } from '../../../components'
import { TypographyVariants } from '../../../types'

type FieldTextProps = {
	value?: any
	label?: string
	placeholder?: string
	variant?: TypographyVariantsType
	color?: string
	rest?: any
}

const FieldText: React.FC<FieldTextProps> = (props) => {
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

export default FieldText
