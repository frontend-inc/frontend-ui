'use client'

import React, { useEffect } from 'react'
import { ProductDetails } from '../..'
import { ProductDetailsProps } from './ProductDetails'
import { useProducts } from '../../../hooks'

export type ProductProps = ProductDetailsProps & {
	productId: string | number
}

const Product: React.FC<ProductProps> = (props) => {
	const { productId } = props || {}

	const { product, findProduct } = useProducts()

	useEffect(() => {
		if (productId) {
			findProduct(productId)
		}
	}, [productId])

	if (!product?.id) return null
	return <ProductDetails {...props} product={product} />
}

export default Product
