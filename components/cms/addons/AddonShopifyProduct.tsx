import React, { useEffect, useState } from 'react'
import { ProductDetails } from '../../../components/shopify'
import { useProducts } from 'frontend-shopify'
import { get } from 'lodash'

export type AddonShopifyProductProps = {
	fieldName: string
	resource: any
}

const AddonShopifyProduct: React.FC<AddonShopifyProductProps> = (props) => {
	const { resource, fieldName, ...rest } = props || {}
	const shopifyHandle = get(resource, fieldName)

	const { loading, product, findProduct } = useProducts()

	useEffect(() => {
		if (shopifyHandle) {
			findProduct(shopifyHandle)
		}
	}, [shopifyHandle])

	if (!product) return null
	return <ProductDetails shopifyProduct={product} {...rest} />
}

export default AddonShopifyProduct
