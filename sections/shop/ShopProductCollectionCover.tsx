import React from 'react'
import { Section } from '../../components'
import { ProductCollectionCover } from '../../components'
import { ProductCollectionCoverProps } from '../../components/shop/product-collections/ProductCollectionCover'
import { SectionProps } from '../../types'

type ShopProductCollectionCoverProps = SectionProps &
	ProductCollectionCoverProps

const ShopProductCollectionCover: React.FC<ShopProductCollectionCoverProps> = (
	props
) => {
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
			<ProductCollectionCover {...rest} />
		</Section>
	)
}

export default ShopProductCollectionCover