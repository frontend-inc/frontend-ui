'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductSearch } from '../../components/shopify'
import { ShopifyProductSearchProps } from '../../components/shopify/products/ShopifyProductSearch'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsProps = SectionProps &
	HeadingProps &
	ShopifyProductSearchProps

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<ShopifyProductSearch {...rest} />
		</Section>
	)
}

export default ShopifyProducts
