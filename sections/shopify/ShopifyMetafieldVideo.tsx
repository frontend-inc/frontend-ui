import React from 'react'
import { Section } from '../../components'
import { MetafieldVideo } from '../../components'
import { MetafieldVideoProps } from '../../components/shopify/products/metafields/MetafieldVideo'
import { SectionProps } from '../../types'

type ShopifyMetafieldVideoProps = SectionProps & MetafieldVideoProps

const ShopifyMetafieldVideo: React.FC<ShopifyMetafieldVideoProps> = (props) => {
	const {
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
			<MetafieldVideo {...rest} />
		</Section>
	)
}

export default ShopifyMetafieldVideo
