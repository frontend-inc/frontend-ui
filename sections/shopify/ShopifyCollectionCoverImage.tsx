import React from 'react'
import { Section } from '../../components'
import { ShopifyCollectionCover } from '../../components/shopify'
import { ShopifyCollectionCoverProps } from '../../components/shopify/collections/ShopifyCollectionCover'
import { SectionProps } from '../../types'

type ShopifyCollectionCoverImageProps = SectionProps & ShopifyCollectionCoverProps

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
			<ShopifyCollectionCover {...rest} />
		</Section>
	)
}

export default ShopifyCollectionCoverImage
