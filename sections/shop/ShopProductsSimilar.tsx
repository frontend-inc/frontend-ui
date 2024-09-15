import React from 'react'
import { Section, Heading } from '../../components'
import { ProductSimilarList } from '../../components/shop'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type ShopProductsSimilarProps = ProductListProps & SectionProps & HeadingProps

const ShopProductsSimilar: React.FC<ShopProductsSimilarProps> = (props) => {
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
			<ProductSimilarList {...rest} />
		</Section>
	)
}

export default ShopProductsSimilar
