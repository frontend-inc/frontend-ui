import React from 'react'
import Rating from '@mui/material/Rating'
import { FieldWrapper } from '../../../components'

type FieldRatingProps = {
	value?: any
	label?: string
	rest?: any
}

const FieldRating: React.FC<FieldRatingProps> = (props) => {
	const { value, label, ...rest } = props
	return (
		<FieldWrapper label={label} {...rest}>
			<Rating readOnly sx={sx.rating} value={value} />
		</FieldWrapper>
	)
}

export default FieldRating

const sx = {
	rating: {
		color: 'primary.main',
	},
}
