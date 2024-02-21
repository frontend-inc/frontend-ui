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
	productComponent?: React.FC<any>
  buttonText?: string
	autoPlay?: boolean
	arrows?: boolean
	showDots?: boolean
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
		productComponent: ProductComponent = ProductCard,
    buttonText = 'Add to cart',
		autoPlay = false,
		arrows = false,
		showDots = true,
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity = false,
    enableOkendoStarRating
	} = props

	const { clientUrl } = useContext(AppContext)

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
		if (!editing) trackProductClicked(product);
		const url = `${clientUrl}/products/${product?.handle}`
		router.push(url)
	}

	return (
		<Carousel autoPlay={autoPlay} arrows={arrows} showDots={showDots}>
			{products?.map((product) => (
				<Box sx={sx.item} key={product.id}>
					<ProductComponent
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
	)
}

export default ProductCarousel

const sx = {
	carousel: {
		width: '900px',
	},
	item: {
		px: '10px',
		pb: 4,
	},
}
