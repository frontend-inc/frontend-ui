import React from 'react'
import { Section, Heading } from '../../components'
import { ProductSimilarList } from '../../components/shop'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type ShopProductRecommendationsProps = ProductListProps &
	SectionProps &
	HeadingProps

const ShopProductRecommendations: React.FC<ShopProductRecommendationsProps> = (
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
      <Stack direction="column" spacing={1}>
        <Heading
          label={label}
          title={title}
          description={description}
          textAlign={textAlign}
        />
        <ProductSimilarList {...rest} />
      </Stack>
		</Section>
	)
}

export default ShopProductRecommendations
