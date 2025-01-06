'use client'

import React from 'react'
import { Typography } from '../../../components'
import { ShopifyProductType } from 'frontend-shopify'

type ShopifyProductDescriptionProps = {
	product?: ShopifyProductType
	color?: string
}

const ShopifyProductDescription: React.FC<ShopifyProductDescriptionProps> = (
	props
) => {
	const { product } = props

	if (!product?.description || product?.description?.length == 0) return null
	return <Typography variant="body1" className='text-md leading-loose'>{product?.description}</Typography>
}

export default ShopifyProductDescription
