'use client'

import React from 'react'
import { ShopifyProductType } from 'frontend-shopify'
import { Typography } from '../../../components'
import { formatCurrency } from 'frontend-shopify'

type ShopifyProductDetailsProps = {
	product?: ShopifyProductType
	price?: number
	compareAtPrice?: number
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
	const { product, price, compareAtPrice } = props

	if (!product) return null
	return (
		<div className="flex flex-col space-y-2">
			<Typography variant="h4">{product.title}</Typography>
			<div className="flex flex-row space-x-2 items-center">
				<Typography variant="body1">
					{price && formatCurrency(price)}
				</Typography>
				{compareAtPrice && (
					<Typography
						variant="body2"
						className="text-foreground/70 line-through"
					>
						{formatCurrency(compareAtPrice)}
					</Typography>
				)}
			</div>
		</div>
	)
}

export default ShopifyProductDetails
