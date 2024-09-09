import React from 'react'
import { ProductGrid } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useRouter } from 'next/router'

export type CollectionProductsGridProps = ProductListProps & {
	productCollectionId: string
}

const CollectionProductsGridByHandle: React.FC<CollectionProductsGridProps> = (
	props
) => {
	const router = useRouter()
	const { handle } = router.query

	console.log('Params', router.query)

	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'collection_products',
		product_collection_id: handle,
	}

	return <ProductGrid query={query} {...rest} />
}

export default CollectionProductsGridByHandle
