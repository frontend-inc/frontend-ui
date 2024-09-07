import React from 'react'
import { Section, Heading } from '../../components'
import { ProductGrid } from '../../components'
import { ProductListProps } from '../../components/ecommerce/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductGridProps = SectionProps & HeadingProps & ProductListProps

const ShopProductGrid: React.FC<ShopProductGridProps> = (props) => {
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProductGrid {...rest} />
		</Section>
	)
}

export default ShopProductGrid
