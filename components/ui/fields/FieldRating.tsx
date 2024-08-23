import React from 'react'
import Rating from '@mui/material/Rating'
import { FieldWrapper } from '../../../components'

type FieldRatingProps = {
	value?: any
	label?: string
	rest?: any
	color?: string
  size?: 'small' | 'medium' | 'large'
}

const FieldRating: React.FC<FieldRatingProps> = (props) => {
	const { value, label, size, color, ...rest } = props
	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Rating size={size} readOnly sx={sx.rating} value={value} />
		</FieldWrapper>
	)
}

export default FieldRating

const sx = {
	rating: {
		color: 'primary.main',
	},
}
