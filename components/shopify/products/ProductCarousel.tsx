import React, { useContext } from 'react'
import { useSegment } from '../../../hooks/addons'
import { Box } from '@mui/material'
import { ProductCard } from '../../../components/shopify'
import { useRouter } from 'next/router'
import { Carousel } from '../../../components'
import { Product } from 'frontend-shopify'
import { AppContext } from '../../../context'

type ProductCarouselProps = {
	editing?: boolean
	loading?: boolean
	products: Product[]
	buttonText?: string
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductCarousel: React.FC<ProductCarouselProps> = (props) => {
	const {
		editing = false,
		products,
		buttonText = 'Add to cart',
		enableAutoPlay = false,
		enableArrows = false,
		enableDots = true,
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity = false,
		enableOkendoStarRating,
	} = props

	const { clientUrl } = useContext(AppContext)

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
		if (!editing) trackProductClicked(product)
		const url = `${clientUrl}/products/${product?.handle}`
		router.push(url)
	}

	return (
		<Box sx={sx.root}>
			<Carousel
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
				enableDots={enableDots}
			>
				{products?.map((product) => (
					<Box sx={sx.item} key={product.id}>
						<ProductCard
							product={product}
							handleClick={() => handleClick(product)}
							buttonText={buttonText}
							enableBorder={enableBorder}
							enableAddToCart={enableAddToCart}
							enableQuickShop={enableQuickShop}
							enableQuantity={enableQuantity}
							enableOkendoStarRating={enableOkendoStarRating}
						/>
					</Box>
				))}
			</Carousel>
		</Box>
	)
}

export default ProductCarousel

const sx = {
	root: {
		maxWidth: '100%',
	},
	item: {
		px: '10px',
		pb: 4,
	},
}
