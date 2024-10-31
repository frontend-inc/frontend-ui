'use client'

import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useApp } from '../../../hooks'

export type CollectionProductsProps = ProductListProps & {
	productCollectionId: string
}

const CollectionProducts: React.FC<CollectionProductsProps> = (props) => {
	let { productCollectionId, ...rest } = props
  const { apiUrl } = useApp()
  const url = `${apiUrl}/shop/product_collections/${productCollectionId}/products`

	return(
    <ProductList 
      {...props} 
      url={url} />
    )
}

export default CollectionProducts
