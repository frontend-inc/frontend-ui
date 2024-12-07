'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductRecommendations as ProductRecommendations } from '../../components/shopify'
import { ShopifyProductRecommendationsProps as ProductRecommendationsProps } from '../../components/shopify/products/ShopifyProductRecommendations'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsProps = SectionProps &
	HeadingProps &
	ProductRecommendationsProps

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
			<ProductRecommendations {...rest} />
		</Section>
	)
}

export default ShopifyProducts
