import React from 'react'
import { ProductDetails, ProductForm } from '../..'
import { ProductDetailsProps } from './ProductDetails'
import { ResourceProvider } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type ProductProps = ProductDetailsProps & {
	url?: string
	foreignUrl?: string
	fields: FormFieldType[]
}

const Product: React.FC<ProductProps> = (props) => {
	const {
		url = '/api/v1/shop/products',
		foreignUrl,
		fields = [],
		product,
	} = props || {}

	return (
		<ResourceProvider
			name="product"
			resource={product}
			url={url}
			foreignUrl={foreignUrl}
		>
			<ProductDetails {...props} />
			<ProductForm fields={fields} />
		</ResourceProvider>
	)
}

export default Product
