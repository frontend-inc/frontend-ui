import React from 'react'
import { ProductList } from '../..'
import { ProductListProps } from '../products/ProductList'
import { useRouter } from 'next/router'

export type CollectionProductsGridProps = ProductListProps & {
	productCollectionId: string
}

const CollectionProductsByHandle: React.FC<CollectionProductsGridProps> = (
	props
) => {
	const router = useRouter()
	const { handle } = router.query

	let { query = {}, ...rest } = props

	query = {
		...query,
		method: 'collection_products',
		product_collection_id: handle,
	}

	return <ProductList query={query} {...rest} />
}

export default CollectionProductsByHandle
