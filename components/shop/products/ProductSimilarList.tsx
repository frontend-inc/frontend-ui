'use client'

import React from 'react'
import ProductList from './ProductList'
import { ProductListProps } from '../products/ProductList'
import { useApp } from '../../../hooks'

export type ProductSimilarListProps = ProductListProps & {
  productId: string | number
}

const ProductSimilarList: React.FC<ProductSimilarListProps> = (props) => {
  const { apiUrl } = useApp()
  const { productId } = props || {}
  const url = `${apiUrl}/shop/products/${productId}/similar_products`
	return <ProductList {...props} url={url} />
}

export default ProductSimilarList
