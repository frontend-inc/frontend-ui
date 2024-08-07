import React from 'react'
import { Section, Heading } from '../../components'
import { ProductCollectionCarousel } from '../../components/shopify'
import { ProductCollectionCarouselProps } from '../../components/shopify/products/ProductCollectionCarousel'
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
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProductCollectionCarousel {...rest} />
		</Section>
	)
}

export default ShopifyProductsCarousel
