'use client'

import React, { useEffect } from 'react'
import { ProductDetails } from '../..'
import { ProductDetailsProps } from './ProductDetails'
import { useResource } from 'frontend-js'

export type ProductProps = ProductDetailsProps & {
	foreignUrl?: string
	productId: string | number 
}

const Product: React.FC<ProductProps> = (props) => {
	
  const {		
		foreignUrl,
		productId,
	} = props || {}

  const { 
    loading, 
    resource: product,
    findOne: findProduct,     
  } = useResource({
    url: '/api/v1/shop/products',
    name: 'product'
  })

  useEffect(() => {
    if(productId){
      findProduct(productId)
    }
  }, [productId])  

  if(!product?.id) return null;
	return (
    <ProductDetails 
      {...props} 
      product={product}
    />
	)
}

export default Product
