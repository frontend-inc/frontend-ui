'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductSimilarList } from '../../components/shop'
import { ProductSimilarListProps } from '../../components/shop/products/ProductSimilarList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductRecommendationsProps = ProductSimilarListProps &
	SectionProps &
	HeadingProps

const ShopProductRecommendations: React.FC<ShopProductRecommendationsProps> = (
	props
) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
		bgColor,
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
				/>
				<ProductSimilarList {...rest} />
			</div>
		</Section>
	)
}

export default ShopProductRecommendations
