'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductFavorites } from '../../components/shopify'
import { ShopifyProductFavoritesProps } from '../../components/shopify/favorites/ShopifyProductFavorites'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyFavoritesProps = SectionProps &
	HeadingProps &
	ShopifyProductFavoritesProps

const ShopifyFavorites: React.FC<ShopifyFavoritesProps> = (props) => {
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
			requireAuth
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
			<ShopifyProductFavorites {...rest} />
		</Section>
	)
}

export default ShopifyFavorites
