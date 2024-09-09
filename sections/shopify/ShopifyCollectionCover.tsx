import React from 'react'
import { Section } from '../../components'
import { ShopifyCollectionCover as CollectionCover } from '../../components/shopify'
import { ShopifyCollectionCoverProps } from '../../components/shopify/collections/ShopifyCollectionCover'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverProps = SectionProps & ShopifyCollectionCoverProps

const ShopifyCollectionCover: React.FC<
	ShopifyCollectionCoverProps
> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CollectionCover {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCover
