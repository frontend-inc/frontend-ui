import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionProductsCarousel } from '../../components/shop'
import { CollectionProductsCarouselProps } from '../../components/shop/collection-products/CollectionProductsCarousel'
import { SectionProps, HeadingProps } from '../../types'
import { Stack } from '@mui/material'

type ShopCollectionProductsCarouselProps = CollectionProductsCarouselProps &
	SectionProps &
	HeadingProps

const ShopCollectionProductsCarousel: React.FC<ShopCollectionProductsCarouselProps> = (
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
        <CollectionProductsCarousel {...rest} />
      </Stack>
		</Section>
	)
}

export default ShopCollectionProductsCarousel
