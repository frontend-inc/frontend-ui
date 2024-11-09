'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProducts } from '../../components/shop'
import { CollectionProductsProps } from '../../components/shop/collection-products/CollectionProducts'
import { SectionProps, HeadingProps } from '../../types'

type ShopCollectionProductsProps = CollectionProductsProps &
	SectionProps &
	HeadingProps

const ShopCollectionProducts: React.FC<ShopCollectionProductsProps> = (
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
				<CollectionProducts {...rest} />
			</div>
		</Section>
	)
}

export default ShopCollectionProducts
