'use client'

import React from 'react'
import { Section } from '../../components'
import { ProductCollectionCover } from '../../components'
import { ProductCollectionCoverProps } from '../../components/shop/product-collections/ProductCollectionCover'
import { SectionProps } from '../../types'

type ShopProductCollectionCoverProps = SectionProps &
	ProductCollectionCoverProps

const ShopProductCollectionCover: React.FC<ShopProductCollectionCoverProps> = (
	props
) => {
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
			py="none"
			px="none"
			maxWidth={maxWidth}
		>
			<ProductCollectionCover {...rest} />
		</Section>
	)
}

export default ShopProductCollectionCover
