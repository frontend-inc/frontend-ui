'use client'

import React from 'react'
import { Rating, Typography } from '../../core'

type ProductRatingProps = {
	resource: any
	enableTotal?: boolean
	size?: 'small' | 'medium' | 'large'
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
}

const ProductRating: React.FC<ProductRatingProps> = (props) => {
	const {
		resource,
		justifyContent = 'flex-start',
		enableTotal = false,
	} = props || {}
	const { avg_rating: rating, num_reviews: numReviews } = resource || {}
	return (
		<div className="flex flex-row space-x-2 items-center w-full">					
			{rating > 0 ? (
				<Rating value={rating} readOnly />
			) : (
				<Typography variant="body2">
					No reviews yet
				</Typography>
			)}
			{rating > 0 && (
				<Typography variant="caption">
					({rating})
				</Typography>
			)}
			{rating > 0 && enableTotal && (
				<Typography variant="caption">
					{numReviews} reviews
				</Typography>
			)}
		</div>
	)
}

export default ProductRating
