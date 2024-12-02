'use client'

import React, { useEffect } from 'react'
import { Cover, ShowButton, CollectionShow } from '../..'
import { useCollections } from '../../../hooks'
import { ResourceProvider } from 'frontend-js'

export type CollectionCoverProps = {
	height?: number
	alignItems?: 'items-center' | 'items-start' | 'items-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	collectionId: string | number
}

const CollectionCover: React.FC<CollectionCoverProps> = (
	props
) => {
  
	const {
		handleClick,
		height = 400,
		alt = 'image',
		enableGradient = false,
		enableOverlay = true,
		alignItems = 'items-center',
		collectionId,
	} = props

	const { collection, findCollection } = useCollections()

	useEffect(() => {
		if (collectionId) {
			findCollection(collectionId)
		}
	}, [collectionId])

	if (!collection) return null
	return (
		<ResourceProvider
			name="collection"
			url={`/cms/collections/${collectionId}`}
			resource={collection}
		>
			<Cover
				height={height}
				title={collection?.title}
				subtitle={collection?.description}
				image={collection?.image?.url}
				alt={alt}
				alignItems={alignItems}
				handleClick={handleClick}
				enableOverlay={enableOverlay}
				enableGradient={enableGradient}
				actions={<ShowButton>Browse</ShowButton>}
			/>
			<CollectionShow />
		</ResourceProvider>
	)
}

export default CollectionCover
