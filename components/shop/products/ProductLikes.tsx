'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from './ProductList'
import { useApp } from '../../../hooks'

const ProductLikes: React.FC<ProductListProps> = (props) => {
  const { apiUrl } = useApp()
  const url = `${apiUrl}/shop/products/likes`

	return <ProductList {...props} url={url} />
}

export default ProductLikes
