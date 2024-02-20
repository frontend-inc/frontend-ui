import React, { useContext } from 'react'
import { Stack } from '@mui/material'
import { ProductCardHoriz } from '../../../components/shopify'
import { useRouter } from 'next/router'
import { useSegment } from '../../../hooks/addons'
import { Product } from 'frontend-shopify'
import { AppContext } from '../../../context'

type ProductListProps = {
	editing?: boolean
  loading?: boolean
	products: Product[]	
	productComponent?: React.FC<any>
  buttonText?: string
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuickShop?: boolean
	enableQuantity?: boolean
  enableOkendoStarRating?: boolean
}

const ProductList: React.FC<ProductListProps> = (props) => {
	
  const { clientUrl } = useContext(AppContext)

	const {
		editing = false,
		products,
		productComponent: ProductComponent = ProductCardHoriz,
    buttonText = 'Add to cart',
		enableBorder = false,
		enableAddToCart,
		enableQuickShop,
		enableQuantity,
    enableOkendoStarRating
	} = props

	const router = useRouter()
	const { trackProductClicked } = useSegment()

	const handleClick = (product) => {
    if(!editing) trackProductClicked(product);
		const url = `${clientUrl}/products/${product?.handle}`
		router.push(url)
	}

	return (
		<Stack spacing={2}>
			{products?.map((product) => (
				<ProductComponent
          key={product.id}
					product={product}
					handleClick={() => handleClick(product)}
          buttonText={buttonText}
					enableBorder={enableBorder}
					enableAddToCart={enableAddToCart}
					enableQuickShop={enableQuickShop}
					enableQuantity={enableQuantity}
          enableOkendoStarRating={enableOkendoStarRating}
				/>
			))}
		</Stack>
	)
}

export default ProductList
