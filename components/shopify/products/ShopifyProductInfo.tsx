'use client'

import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Typography } from '../../core'
import { formatCurrency } from 'frontend-shopify'
import { OkendoStarRating } from '../../../components/addons'

type ShopifyProductDetailsProps = {
	product?: ShopifyProductType
	price?: number
	compareAtPrice?: number
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
	const {
		product,
		price,
		compareAtPrice,
	} = props

	if (!product) return null
	return (
		<div className="flex flex-col space-y-2">
			<Typography variant="h4">{product.title}</Typography>
			<div className="flex flex-row space-x-2">
				<Typography variant="h6">{price && formatCurrency(price)}</Typography>
				{compareAtPrice && (
					<Typography
						variant="subtitle2"
						className="text-muted-foreground line-through"
					>
						{formatCurrency(compareAtPrice)}
					</Typography>
				)}
			</div>
		</div>
	)
}

export default ShopifyProductDetails
