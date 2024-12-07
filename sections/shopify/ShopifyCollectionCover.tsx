'use client'

import React from 'react'
import { Section } from '../../components'
import { ShopifyCollectionCover as CollectionCover } from '../../components/shopify'
import { ShopifyCollectionCoverProps as CollectionCoverProps } from '../../components/shopify/collections/ShopifyCollectionCover'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverProps = SectionProps & CollectionCoverProps

const ShopifyCollectionCover: React.FC<ShopifyCollectionCoverProps> = (
	props
) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			mode="dark"
			py="none"
			px="none"
			maxWidth={maxWidth}
		>
			<CollectionCover {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCover
