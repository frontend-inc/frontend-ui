import React, { useEffect } from 'react'
import { ProductDetails } from '../../shopify'
import { useProducts } from 'frontend-shopify'
import { get } from 'lodash'

export type FieldShopifyProductProps = {
	fieldName: string
	resource: any
}

const FieldShopifyProduct: React.FC<FieldShopifyProductProps> = (props) => {
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

export default FieldShopifyProduct
