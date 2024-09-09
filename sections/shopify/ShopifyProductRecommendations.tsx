import React from 'react'
import { Section, Heading } from '../../components'
import { ShopifyProductRecommendations as ProductRecommendations } from '../../components/shopify'
import { ShopifyProductRecommendationsProps as ProductRecommendationsProps } from '../../components/shopify/products/ShopifyProductRecommendations'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyProductsProps = SectionProps &
	HeadingProps &
	ProductRecommendationsProps

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {
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
			<ProductRecommendations {...rest} />
		</Section>
	)
}

export default ShopifyProducts
