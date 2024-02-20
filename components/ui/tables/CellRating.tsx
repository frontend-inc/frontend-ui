import React from 'react'
import Rating from '@mui/material/Rating'
import { StarBorderOutlined, Star } from '@mui/icons-material'

type CellRatingProps = {
	value: number
}

const CellRating: React.FC<CellRatingProps> = (props) => {
	const { value = 0 } = props
	return (
		<Rating
			readOnly
			value={value}
			icon={<Star sx={sx.rating} />}
			emptyIcon={<StarBorderOutlined sx={sx.emptyRating} />}
		/>
	)
}

export default CellRating

const sx = {
	rating: {
		color: 'primary.main',
	},
	emptyRating: {
		color: 'text.secondary',
	},
}
