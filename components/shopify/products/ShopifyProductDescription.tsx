import React from 'react'
import { Typography } from '@mui/material'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductDescriptionProps = {
	product?: ShopifyProductType
	color?: string
}

const ShopifyProductDescription: React.FC<ShopifyProductDescriptionProps> = (
	props
) => {
	const { product, color = 'text.secondary' } = props

	return (
		<Typography variant="body2" color={color} sx={sx.description}>
			{product?.description}
		</Typography>
	)
}

export default ShopifyProductDescription

const sx = {
	description: {
		whiteSpace: 'pre-wrap',
	},
}
