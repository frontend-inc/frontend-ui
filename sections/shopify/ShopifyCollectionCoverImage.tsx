import React from 'react'
import { Section } from '../../components'
import { CollectionCover } from '../../components/shopify'
import { CollectionCoverProps } from '../../components/shopify/collections/CollectionCover'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverImageProps = SectionProps & CollectionCoverProps

const ShopifyCollectionCoverImage: React.FC<
	ShopifyCollectionCoverImageProps
> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CollectionCover {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCoverImage
