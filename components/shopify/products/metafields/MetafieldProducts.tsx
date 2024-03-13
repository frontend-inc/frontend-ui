import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { ProductGrid, ProductCarousel } from '../../../shopify'
import {
	MetafieldIdentifier,
	Product,
	getMetafieldReferences,
} from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'

type MetafieldProductsProps = {
	title?: string
	layout?: 'grid' | 'carousel'
	handle: string
	metafield: MetafieldIdentifier
}

const MetafieldProducts: React.FC<MetafieldProductsProps> = (props) => {
	const { title, handle, layout = 'grid', metafield, ...rest } = props

	const { loading, product, findProduct } = useProducts()
	const [products, setProducts] = useState<Product[] | null>(null)

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
			{title && (
				<Typography color="textPrimary" variant="h5">
					{title}
				</Typography>
			)}
			{products && (
				<>
					{layout == 'grid' && <ProductGrid products={products} {...rest} />}
					{layout == 'carousel' && (
						<ProductCarousel products={products} {...rest} />
					)}
				</>
			)}
		</>
	)
}

export default MetafieldProducts
