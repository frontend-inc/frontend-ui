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
			<Collections {...rest} />
		</Section>
	)
}

export default ShopifyCollections
