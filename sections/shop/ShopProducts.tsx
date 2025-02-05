'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ProductList } from '../../components'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductsProps = SectionProps & HeadingProps & ProductListProps

const ShopProducts: React.FC<ShopProductsProps> = (props) => {
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
				/>
				<ProductList {...rest} />
			</div>
		</Section>
	)
}

export default ShopProducts
