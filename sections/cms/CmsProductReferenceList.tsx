import React from 'react'
import { Section, Heading } from '../../components'
import { ProductReferenceList } from '../../components'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'

type CmsProductReferenceListProps = SectionProps &
	HeadingProps &
	ProductListProps

const CmsProductReferenceList: React.FC<CmsProductReferenceListProps> = (
	props
) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgColor,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			bgColor={bgColor}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requirePaid={requirePaid}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<ProductReferenceList {...rest} />
		</Section>
	)
}

export default CmsProductReferenceList
