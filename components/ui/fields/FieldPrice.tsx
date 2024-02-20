import React from 'react'
import { FieldString } from '../../../components'
import { TypographyVariants } from '../../../types'

type FieldPriceProps = {
	value?: any
	label?: string
	placeholder?: string
	variant?: TypographyVariants
	color?: string
	rest?: any
	currency?: string
	digits?: number
}

const FieldPrice: React.FC<FieldPriceProps> = (props) => {
	const {
		value,
		currency = 'USD',
		digits = 2,
		label,
		variant,
		color,
		placeholder,
		...rest
	} = props

	const price = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		maximumFractionDigits: digits,
		minimumFractionDigits: digits,
	}).format(value)

	return (
		<FieldString
			variant={variant}
			value={price}
			label={label}
			color={color}
			placeholder={placeholder}
			{...rest}
		/>
	)
}

export default FieldPrice
