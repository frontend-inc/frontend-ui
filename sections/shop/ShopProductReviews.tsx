'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductReviews } from '../../components'
import { ProductReviewsProps } from '../../components/shop/product-reviews/ProductReviews'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductReviewsProps = SectionProps & HeadingProps & ProductReviewsProps

const ShopProductReviews: React.FC<ShopProductReviewsProps> = (props) => {
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
			<ProductReviews {...rest} />
		</Section>
	)
}

export default ShopProductReviews
