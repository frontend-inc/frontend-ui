'use client'

import React, { useEffect } from 'react'
import { ShopifyProductDetails } from '../../../shopify'
import { useProducts } from 'frontend-shopify'

export type FieldShopifyProductProps = {
	value: string 
}

const FieldShopifyProduct: React.FC<FieldShopifyProductProps> = (props) => {
	const { value: shopifyHandle, ...rest } = props || {}

	const { loading, product, findProduct } = useProducts()

	useEffect(() => {
		if (shopifyHandle) {
			findProduct(shopifyHandle)
		}
	}, [shopifyHandle])

	if (!product) return null
	return <ShopifyProductDetails shopifyProduct={product} {...rest} />
}

export default FieldShopifyProduct
