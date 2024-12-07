'use client'

import React from 'react'
import { Section } from '../../components'
import { ShopifyProductDetails } from '../../components/shopify'
import { ShopifyProductDetailsProps } from '../../components/shopify/products/ShopifyProductDetails'
import { SectionProps } from '../../types'

type ShopifyPDPProps = SectionProps & ShopifyProductDetailsProps

const ShopifyPDP: React.FC<ShopifyPDPProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<ShopifyProductDetails {...rest} />
		</Section>
	)
}

export default ShopifyPDP
