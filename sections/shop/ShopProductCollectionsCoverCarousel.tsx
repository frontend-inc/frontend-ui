import React from 'react'
import { Section } from '../../components'
import { ProductCollectionCarouselCoverList } from '../../components'
import { ProductCollectionCarouselCoverListProps } from '../../components/shop/product-collections/ProductCollectionCarouselCoverList'
import { SectionProps } from '../../types'

type ShopProductCollectionsCoverCarouselProps = SectionProps & ProductCollectionCarouselCoverListProps

const ShopProductCollectionsCoverCarousel: React.FC<ShopProductCollectionsCoverCarouselProps> = (props) => {
	const {
		mode='dark',
		py,
		px,
		maxWidth,
		requireAuth,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			mode={mode}
			py={0}
			px={0}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<ProductCollectionCarouselCoverList {...rest} />
		</Section>
	)
}

export default ShopProductCollectionsCoverCarousel
