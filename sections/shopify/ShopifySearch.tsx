import React from 'react'
import { Section, Heading } from '../../components'
import { ProductSearch } from '../../components/shopify'
import { ProductSearchProps } from '../../components/shopify/products/ProductSearch'
import { SectionProps, HeadingProps } from '../../types'

type ShopifySearchProps = SectionProps & HeadingProps & ProductSearchProps

const ShopifySearch: React.FC<ShopifySearchProps> = (props) => {
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
			<ProductSearch {...rest} />
		</Section>
	)
}

export default ShopifySearch
