import React from 'react'
import { Product } from 'frontend-shopify'
import { Stack, Typography } from '@mui/material'
import { formatCurrency } from 'frontend-shopify'
import { ProductDescription } from '../../../components/shopify'
import { OkendoStarRating } from '../../../components/addons'

type ProductDetailsProps = {
	product?: Product
	price?: number
	compareAtPrice?: number
	disableCompareAtPrice?: boolean
	enableOkendoStarRating?: boolean
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
	const {
		product,
		price,
		compareAtPrice,
		disableCompareAtPrice = false,
		enableOkendoStarRating = false,
	} = props

	if (!product) return null
	return (
		<Stack spacing={1}>
			<Typography color="text.primary" variant="h3">
				{product.title}
			</Typography>
			{enableOkendoStarRating && <OkendoStarRating product={product} />}
			<Typography color="text.primary" variant="body2" sx={sx.price}>
				{price && formatCurrency(price)}
				{!disableCompareAtPrice && compareAtPrice && (
					<span>{formatCurrency(compareAtPrice)}</span>
				)}
			</Typography>
			<ProductDescription product={product} />
		</Stack>
	)
}

export default ProductDetails

const sx = {
	price: {
		'& span': {
			textDecoration: 'line-through',
			color: 'text.secondary',
			ml: 1,
		},
	},
}
