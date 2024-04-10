import React, { useState, useEffect } from 'react'
import { ProductGrid, ProductCarousel } from '../../../shopify'
import {
	MetafieldIdentifierType,
	ProductType,
	getMetafieldReferences,
} from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'

export type MetafieldProductsProps = {	
	layout?: 'grid' | 'carousel'
	handle: string
	metafield: MetafieldIdentifierType
}

const MetafieldProducts: React.FC<MetafieldProductsProps> = (props) => {
	const { handle, layout = 'grid', metafield, ...rest } = props

	const { loading, product, findProduct } = useProducts()
	const [products, setProducts] = useState<ProductType[] | null>(null)

	useEffect(() => {
		if (handle && metafield) {
			findProduct(handle, [metafield])
		}
	}, [handle, metafield])

	useEffect(() => {
		if (product) {
			setProducts(getMetafieldReferences(product, metafield.key))
		}
	}, [product])

	if (!products) return null
	return (
    <>
      {layout == 'grid' && (
        <ProductGrid products={products} {...rest} />
      )}
      {layout == 'carousel' && (
        <ProductCarousel products={products} {...rest} />
      )}
    </>
	)
}

export default MetafieldProducts
