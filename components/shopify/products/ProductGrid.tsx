import React, { useContext } from 'react'
import { Grid, Box } from '@mui/material'
import { ProductCard } from '../../../components/shopify'
import { useRouter } from 'next/router'
import { useSegment } from '../../../hooks/addons'
import { ProductType } from 'frontend-shopify'
import { AppContext } from '../../../context'

type ProductGridProps = {
	editing?: boolean
	loading?: boolean
	products: ProductType[]
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
	enableOkendoStarRating?: boolean
}

const ProductGrid: React.FC<ProductGridProps> = (props) => {
	const { clientUrl } = useContext(AppContext)

	const {
		editing = false,
		products,
		xs = 12,
		sm = 6,
		md = 4,
		lg = 4,
		xl = 3,
		buttonText = 'Add to cart',
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity,
		enableOkendoStarRating,
	} = props

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
		if (!editing) trackProductClicked(product)
		const url = `${clientUrl}/products/${product?.handle}`
		router.push(url)
	}

	return (
		<Grid container spacing={0}>
			{products?.map((product) => (
				<Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} key={product?.id}>
					<Box sx={sx.item} key={product?.id}>
						<ProductCard
							product={product}
							handleClick={() => handleClick(product)}
							enableBorder={enableBorder}
							enableAddToCart={enableAddToCart}
							enableQuickShop={enableQuickShop}
							enableQuantity={enableQuantity}
							enableOkendoStarRating={enableOkendoStarRating}
							buttonText={buttonText}
						/>
					</Box>
				</Grid>
			))}
		</Grid>
	)
}

export default ProductGrid

const sx = {
	item: {
		p: 1,
	},
}
