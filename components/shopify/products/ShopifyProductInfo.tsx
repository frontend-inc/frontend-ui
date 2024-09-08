import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Stack, Typography } from '@mui/material'
import { formatCurrency } from 'frontend-shopify'
import { ShopifyProductDescription } from '../../../components/shopify'
import { OkendoStarRating } from '../../../components/addons'

type ShopifyProductDetailsProps = {
	product?: ShopifyProductType
	price?: number
	compareAtPrice?: number
	disableCompareAtPrice?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
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
			<Typography color="text.primary" variant="h5">
				{product.title}
			</Typography>
			{enableOkendoStarRating && <OkendoStarRating product={product} />}
			<Typography color="text.primary" variant="body2" sx={sx.price}>
				{price && formatCurrency(price)}
				{!disableCompareAtPrice && compareAtPrice && (
					<span>{formatCurrency(compareAtPrice)}</span>
				)}
			</Typography>
			<ShopifyProductDescription product={product} />
		</Stack>
	)
}

export default ShopifyProductDetails

const sx = {
	price: {
		'& span': {
			textDecoration: 'line-through',
			color: 'text.secondary',
			ml: 1,
		},
	},
}
