import React from 'react'
import { useApp } from '../../../hooks'
import { ProductArray } from '../../shopify'
import { useRouter } from 'next/router'
import { get } from 'lodash'

export type FieldShopifyProductsProps = {
	resource: any
  href?: string
}

const FieldShopifyProducts: React.FC<FieldShopifyProductsProps> = (props) => {
	const { resource, href='/products', ...rest } = props || {}
  const fieldName = 'shopify_products'
	const shopifyHandles = get(resource, fieldName) || []

  const router = useRouter()
  const { clientUrl } = useApp()

  const handleClick = (product) => {
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

	if (shopifyHandles?.length == 0) return null
	return(
    <ProductArray   
      handles={shopifyHandles} 
      handleClick={handleClick}
      {...rest} 
    />
  )
}

export default FieldShopifyProducts
