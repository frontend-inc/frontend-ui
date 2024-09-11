import React from 'react'
import { Section } from '../../components'
import { Product } from '../../components/shop'
import { ProductProps } from '../../components/shop/pdp/Product'
import { SectionProps } from '../../types'

type ShopProductDetailsProps = ProductProps & SectionProps

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
			<Product {...rest} />
		</Section>
	)
}

export default ShopProductDetails
