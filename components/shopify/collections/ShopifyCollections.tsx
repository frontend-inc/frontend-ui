'use client'

import React, { useEffect } from 'react'
import { useCollections } from 'frontend-shopify'
import { ShopifyCollectionCard } from '../../../components'
import { cn } from 'frontend-shadcn'

export type ShopifyCollectionsProps = {
	href: string
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ShopifyCollections: React.FC<ShopifyCollectionsProps> = (props) => {
	const { enableGradient = false, enableOverlay = false } = props

	const { loading, collections, findCollections } = useCollections()

	useEffect(() => {
		findCollections()
	}, [])

	return (
		<div
			className={cn(
				'w-full grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 pb-1',
				loading && 'opacity-50'
			)}
		>
			{collections?.map((collection, index) => (
				<ShopifyCollectionCard
					key={index}
					collection={collection}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</div>
	)
}

export default ShopifyCollections
