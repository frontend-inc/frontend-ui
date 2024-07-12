import React from 'react'
import { Section, Heading } from '../../components'
import { ProductRecommendations } from '../../components/shopify'
import { ProductRecommendationsProps } from '../../components/shopify/products/ProductRecommendations'
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
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
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
