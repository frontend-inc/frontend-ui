import React from 'react'
import ProductVariantOptions from './ProductVariantOptions'
import ColorVariantOptions from './ColorVariantOptions'
import { Product } from 'frontend-shopify'

type ProductVariantSelectorProps = {
  product: Product
  selectedOptions: any
  handleOptionChange: any
}

const ProductVariantSelector: React.FC<ProductVariantSelectorProps> = (props) => {

	const { product, selectedOptions, handleOptionChange } = props

	const productOption = (optionName) => {
		return product?.options?.find((option) => option?.name == optionName)
	}

	const SORTED_OPTIONS = ['Color', 'Size', 'Style', 'Material']

	return (
		<>
			{SORTED_OPTIONS.map((optionName) => {
				let option = productOption(optionName)
				if (!option) return null
				return optionName == 'Color' ? (
					<ColorVariantOptions
            key={optionName}
            product={product}
						name={'Color'}
						values={option?.values}
						selected={selectedOptions['Color']}
						handleChange={handleOptionChange}
					/>
				) : (
					<ProductVariantOptions
            key={optionName}
						name={option?.name}
						values={option?.values}
						selected={selectedOptions[option?.name]}
						handleChange={handleOptionChange}
					/>
				)
			})}
		</>
	)
}

export default ProductVariantSelector
