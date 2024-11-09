'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductSearch as ProductSearch } from '../../components/shopify'
import { ShopifyProductSearchProps as ProductSearchProps } from '../../components/shopify/products/ShopifyProductSearch'
import { SectionProps, HeadingProps } from '../../types'

type ShopifySearchProps = SectionProps & HeadingProps & ProductSearchProps

const ShopifySearch: React.FC<ShopifySearchProps> = (props) => {
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<ProductSearch {...rest} />
		</Section>
	)
}

export default ShopifySearch
