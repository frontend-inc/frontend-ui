'use client'

import React, { useEffect } from 'react'
import { ProductDetails } from '../..'
import { ProductDetailsProps } from './ProductDetails'
import { ResourceProvider, useResource } from 'frontend-js'

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

	return (
		<ResourceProvider
			name="product"
			resource={product}
			url={'/api/v1/shop/products'}
			foreignUrl={foreignUrl}
		>
			<ProductDetails {...props} />
		</ResourceProvider>
	)
}

export default Product
