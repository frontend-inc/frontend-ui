import React from 'react'
import { Section } from '../../components'
import { ProductFeatured } from '../../components/shopify'
import { ProductFeaturedProps } from '../../components/shopify/products/ProductFeatured'
import { SectionProps } from '../../types'

type ShopifyProductFeaturedProps = SectionProps & ProductFeaturedProps

const ShopifyProductFeatured: React.FC<ShopifyProductFeaturedProps> = (
	props
) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<ProductFeatured {...rest} />
		</Section>
	)
}

export default ShopifyProductFeatured
