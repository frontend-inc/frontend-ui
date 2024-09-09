import React from 'react'
import { ProductDetails, ProductForm } from '../..'
import { ProductDetailsProps } from './ProductDetails'
import { ResourceProvider } from 'frontend-js'
import { FormFieldType } from '../../../types'

export type ProductContainerProps = ProductDetailsProps & {
	url: string
	foreignUrl?: string
	fields: FormFieldType[]
}

const ProductContainer: React.FC<ProductContainerProps> = (props) => {
	const { url, foreignUrl, fields = [], product } = props || {}

	return (
		<ResourceProvider
			name="product"
			resource={product}
			url={url}
			foreignUrl={foreignUrl}
		>
			<ProductDetails {...props} url={url} />
			<ProductForm fields={fields} />
		</ResourceProvider>
	)
}

export default ProductContainer
