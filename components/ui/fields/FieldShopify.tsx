import React from 'react'
import { FieldString } from '../..'
import { TypographyVariantsType } from '../../../types'

type FieldShopifyProps = {
	value?: any
	label?: string
	placeholder?: string
	variant?: TypographyVariantsType
	color?: string
	rest?: any
}

const FieldShopify: React.FC<FieldShopifyProps> = (props) => {
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

export default FieldShopify
