import React from 'react'
import { Section, Heading } from '../../components'
import { ProductFavoritesGrid } from '../../components/shop'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductFavoritesGridProps = ProductListProps &
	SectionProps &
	HeadingProps

const ShopProductFavoritesGrid: React.FC<ShopProductFavoritesGridProps> = (
	props
) => {
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
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
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
			<ProductFavoritesGrid {...rest} />
		</Section>
	)
}

export default ShopProductFavoritesGrid
