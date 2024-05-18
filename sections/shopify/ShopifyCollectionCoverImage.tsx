import React from 'react'
import { Section } from '../../components'
import { CollectionCoverImage } from '../../components/shopify'
import { CollectionCoverImageProps } from '../../components/shopify/collections/CollectionCoverImage'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverImageProps = SectionProps & CollectionCoverImageProps

const ShopifyCollectionCoverImage: React.FC<
	ShopifyCollectionCoverImageProps
> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<CollectionCoverImage {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCoverImage
