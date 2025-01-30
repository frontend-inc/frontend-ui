'use client'

import React from 'react'
import { Typography } from '../../../components'
import { ShopifyProductType } from 'frontend-shopify'
import { ScrollShadow } from '@nextui-org/react'

type ShopifyProductDescriptionProps = {
	product?: ShopifyProductType
	color?: string
}

const ShopifyProductDescription: React.FC<ShopifyProductDescriptionProps> = (
	props
) => {
	const { product } = props

	if (!product?.description || product?.description?.length == 0) return null
	return (
    <ScrollShadow className="h-full max-h-[340px]">
      <Typography variant="body1" className="text-md whitespace-pre-line leading-loose">
        {product?.description}
      </Typography>
    </ScrollShadow>
	)
}

export default ShopifyProductDescription
