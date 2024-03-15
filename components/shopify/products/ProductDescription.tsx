import React from 'react'
import { Typography } from '@mui/material'
import { ProductType } from 'frontend-shopify'

type ProductDescriptionProps = {
	product?: ProductType
	color?: string
}

const ProductDescription: React.FC<ProductDescriptionProps> = (props) => {
	const { product, color = 'text.secondary' } = props

	return (
		<Typography variant="body2" color={color} sx={sx.description}>
			{product?.description}
		</Typography>
	)
}

export default ProductDescription

const sx = {
	description: {
		whiteSpace: 'pre-wrap',
	},
}
