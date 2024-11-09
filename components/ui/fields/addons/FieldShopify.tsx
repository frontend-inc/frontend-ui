'use client'

import React from 'react'
import { ShopifyProductDetails } from '../../../shopify'

export type FieldShopifyProps = {
	value: string
}

const FieldShopify: React.FC<FieldShopifyProps> = (props) => {
	const { value, ...rest } = props || {}
	return <ShopifyProductDetails {...rest} shopifyProduct={value} />
}

export default FieldShopify
