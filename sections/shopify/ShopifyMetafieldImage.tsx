import React from 'react'
import { Section } from '../../components'
import { MetafieldImage } from '../../components'
import { MetafieldImageProps } from '../../components/shopify/products/metafields/MetafieldImage'
import { SectionProps } from '../../types'

type ShopifyMetafieldImageProps = SectionProps & MetafieldImageProps

const ShopifyMetafieldImage: React.FC<ShopifyMetafieldImageProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<MetafieldImage {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldImage
