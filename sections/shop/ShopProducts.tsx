import React from 'react'
import { Section, Heading } from '../../components'
import { ProductList } from '../../components'
import { ProductListProps } from '../../components/shop/products/ProductList'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type ShopProductsProps = SectionProps & HeadingProps & ProductListProps

const ShopProducts: React.FC<ShopProductsProps> = (props) => {
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
      <Stack direction="column" spacing={1}>
        <Heading
          label={label}
          title={title}
          description={description}
          textAlign={textAlign}
        />
			  <ProductList {...rest} />
      </Stack>
		</Section>
	)
}

export default ShopProducts
