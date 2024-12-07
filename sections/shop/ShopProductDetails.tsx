'use client'

import React from 'react'
import { Section } from '../../components'
import { Product } from '../../components/shop'
import { ProductProps } from '../../components/shop/pdp/Product'
import { SectionProps } from '../../types'

type ShopProductDetailsProps = ProductProps & SectionProps

const ShopProductDetails: React.FC<ShopProductDetailsProps> = (props) => {
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
			<Product {...rest} />
		</Section>
	)
}

export default ShopProductDetails
