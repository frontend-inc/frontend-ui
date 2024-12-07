'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductCollectionList } from '../../components'
import { ProductCollectionListProps } from '../../components/shop/product-collections/ProductCollectionList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductCollectionsProps = SectionProps &
	HeadingProps &
	ProductCollectionListProps

const ShopProductCollections: React.FC<ShopProductCollectionsProps> = (
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
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
		>
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<ProductCollectionList {...rest} />
		</Section>
	)
}

export default ShopProductCollections
