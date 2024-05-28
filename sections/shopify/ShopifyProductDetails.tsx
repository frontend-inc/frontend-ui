import React from 'react'
import { Section } from '../../components'
import { ProductDetails } from '../../components/shopify'
import { ProductDetailsProps } from '../../components/shopify/products/ProductDetails'
import { SectionProps } from '../../types'

type ShopifyPDPProps = SectionProps & ProductDetailsProps

const ShopifyPDP: React.FC<ShopifyPDPProps> = (props) => {
	const {
		bgcolor,
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
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<ProductDetails {...rest} />
		</Section>
	)
}

export default ShopifyPDP
