import React from 'react'
import { Section, Heading } from '../../components'
import { ProductFavorites } from '../../components/shopify'
import { ProductFavoritesProps } from '../../components/shopify/favorites/ProductFavorites'
import { SectionProps, HeadingProps } from '../../types'

type ShopifyFavoritesProps = SectionProps & HeadingProps & ProductFavoritesProps

const ShopifyFavorites: React.FC<ShopifyFavoritesProps> = (props) => {
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
			bgcolor={bgcolor}
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
			<ProductFavorites {...rest} />
		</Section>
	)
}

export default ShopifyFavorites
