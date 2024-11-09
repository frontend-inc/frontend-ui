'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProductsCarousel } from '../../components/shop'
import { CollectionProductsCarouselProps } from '../../components/shop/collection-products/CollectionProductsCarousel'
import { SectionProps, HeadingProps } from '../../types'

type ShopCollectionProductsCarouselProps = CollectionProductsCarouselProps &
	SectionProps &
	HeadingProps

const ShopCollectionProductsCarousel: React.FC<
	ShopCollectionProductsCarouselProps
> = (props) => {
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
				<CollectionProductsCarousel {...rest} />
			</div>
		</Section>
	)
}

export default ShopCollectionProductsCarousel
