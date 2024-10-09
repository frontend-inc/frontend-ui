import React from 'react'
import { Rating } from '../../../tailwind'
import { FieldWrapper } from '../../../components'

type FieldRatingProps = {
	value?: any
	label?: string
	rest?: any
	color?: string
	size?: 'sm' | 'md' | 'lg'
}

const FieldRating: React.FC<FieldRatingProps> = (props) => {
	const { value, label, size='md', color, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Rating size={size} readOnly value={value} />
		</FieldWrapper>
	)
}

export default FieldRating
