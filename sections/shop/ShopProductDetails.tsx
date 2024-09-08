import React from 'react'
import { Section } from '../../components'
import { ProductContainer } from '../../components/shop'
import { ProductContainerProps } from '../../components/shop/pdp/ProductContainer'
import { SectionProps } from '../../types'

type ShopProductDetailsProps = ProductContainerProps & SectionProps

const ShopProductDetails: React.FC<ShopProductDetailsProps> = (props) => {
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
			<ProductContainer {...rest} />
		</Section>
	)
}

export default ShopProductDetails
