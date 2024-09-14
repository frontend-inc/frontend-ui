import React from 'react'
import { Box } from '@mui/material'
import { ShopifyProductCard } from '..'
import { useRouter } from 'next/router'
import { useSegment } from '../../../hooks/addons'
import { ShopifyProductType } from 'frontend-shopify'
import { useApp } from '../../../hooks'

type ShopifyProductsProps = {
	href: string
	loading?: boolean
	products: ShopifyProductType[]
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

const ShopifyProducts: React.FC<ShopifyProductsProps> = (props) => {
	const { clientUrl } = useApp()

	const {
		href = '/products',
		products,
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
		if (href) {
			const url = `${clientUrl}${href}/${product?.handle}`
			router.push(url)
		}
	}

	return (
		<Box sx={sx.grid}>
			{products?.map((product) => (
				<Box sx={sx.item} key={product?.id}>
					<ShopifyProductCard
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
			))}
		</Box>
	)
}

export default ShopifyProducts

const sx = {
	item: {
		p: 1,
		gridColumn: 'span 1',
	},
	grid: {
		maxWidth: '100%',
		display: 'grid',
		gridTemplateColumns: {
			md: 'repeat(3, 1fr)',
			sm: 'repeat(2, 1fr)',
			xs: '1fr',
		},
	},
}
