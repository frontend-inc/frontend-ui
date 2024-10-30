'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from './ProductList'
import { useApp } from '../../../hooks'

const ProductFavorites: React.FC<ProductListProps> = (props) => {
  const { apiUrl } = useApp()
  const url = `${apiUrl}/shop/products/favorites`

	return <ProductList {...props} url={url} />
}

export default ProductFavorites
