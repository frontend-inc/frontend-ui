import React from 'react'
import { ProductGrid } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useRouter } from 'next/router'

export type CollectionProductsGridProps = ProductListProps & {
	productCollectionId: string
}

const CollectionProductsGrid: React.FC<CollectionProductsGridProps> = (
	props
) => {
	let { query = {}, productCollectionId, ...rest } = props

	query = {
		...query,
		method: 'collection_products',
		product_collection_id: productCollectionId,
	}

	return <ProductGrid query={query} {...rest} />
}

export default CollectionProductsGrid
