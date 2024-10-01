import React from 'react'
import { Section } from '../../components'
import { ShopifyProductDetails } from '../../components/shopify'
import { ShopifyProductDetailsProps } from '../../components/shopify/products/ShopifyProductDetails'
import { SectionProps } from '../../types'

type ShopifyPDPProps = SectionProps & ShopifyProductDetailsProps

const ShopifyPDP: React.FC<ShopifyPDPProps> = (props) => {
	const {
		bgColor,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<ShopifyProductDetails {...rest} />
		</Section>
	)
}

export default ShopifyPDP
