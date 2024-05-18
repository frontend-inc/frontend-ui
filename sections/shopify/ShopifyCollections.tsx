import React from 'react'
import { Section, Heading } from '../../components'
import { Collections } from '../../components/shopify'
import { CollectionsProps } from '../../components/shopify/collections/Collections'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyCollectionsProps = SectionProps & HeadingProps & CollectionsProps

const ShopifyCollections: React.FC<ShopifyCollectionsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Collections {...rest} />
		</Section>
	)
}

export default ShopifyCollections
