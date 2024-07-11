import React from 'react'
import { Section, Heading } from '../../components'
import { Metafields } from '../../components'
import { ProductMetafieldsProps } from '../../components/shopify/products/metafields/Metafields'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyMetafieldsProps = SectionProps &
	HeadingProps &
	ProductMetafieldsProps

const ShopifyMetafields: React.FC<ShopifyMetafieldsProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		theme,
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
			theme={theme}
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
			<Metafields {...rest} />
		</Section>
	)
}

export default ShopifyMetafields
