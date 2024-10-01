import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProducts } from '../../components/shop'
import { CollectionProductsProps } from '../../components/shop/collection-products/CollectionProducts'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type ShopCollectionProductsProps = CollectionProductsProps &
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
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			bgColor={bgColor}
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
        <CollectionProducts {...rest} />
      </Stack>
		</Section>
	)
}

export default ShopCollectionProducts
