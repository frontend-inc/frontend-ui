'use client'

import React from 'react'
import { FieldString } from '../..'
import { FieldElementProps } from './Field'

const FieldShopify: React.FC<FieldElementProps> = (props) => {
	const { value, label, variant, color, placeholder } = props
	return (
		<FieldString
			variant={variant}
			value={value}
			label={label}
			color={color}
			placeholder={placeholder}
		/>
	)
}

export default FieldShopify
