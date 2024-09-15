import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProductsGridByHandle } from '../../components/shop'
import { CollectionProductsGridProps } from '../../components/shop/collection-products/CollectionProducts'
import { SectionProps, HeadingProps } from '../../types'

type ShopCollectionProductsProps = CollectionProductsGridProps &
	SectionProps &
	HeadingProps

const ShopCollectionProducts: React.FC<ShopCollectionProductsProps> = (
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

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
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
			<CollectionProductsGridByHandle {...rest} />
		</Section>
	)
}

export default ShopCollectionProducts
