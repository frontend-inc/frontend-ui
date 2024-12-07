'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductCollectionCarousel as ProductCollectionCarousel } from '../../components/shopify'
import { ShopifyProductCollectionCarouselProps as ProductCollectionCarouselProps } from '../../components/shopify/products/ShopifyProductCollectionCarousel'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsCarouselProps = SectionProps &
	HeadingProps &
	ProductCollectionCarouselProps

const ShopifyProductsCarousel: React.FC<ShopifyProductsCarouselProps> = (
	props
) => {
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
			<ProductCollectionCarousel {...rest} />
		</Section>
	)
}

export default ShopifyProductsCarousel
