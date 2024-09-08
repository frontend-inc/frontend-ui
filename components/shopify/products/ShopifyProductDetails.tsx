import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import {
	ShopifyAddToCartButton,
	ShopifyProductInfo,
	ShopifyProductImages,
	ShopifyProductVariantSelector,
	ShopifyProductMetafields,
	ShopifyTrackRecentlyViewed,
} from '..'
import {
	useProductDetails,
  ShopifyMetafieldType,
  ShopifyProductType 	
} from 'frontend-shopify'

export type ShopifyProductDetailsProps = {
	shopifyProduct: ShopifyProductType
	buttonText?: string
	metafields?: ShopifyMetafieldType[]
	enableQuantity?: boolean
	enableFavorites?: boolean
	enableSubscription?: boolean
	enableOkendoStarRating?: boolean
}

const ShopifyProductDetails: React.FC<ShopifyProductDetailsProps> = (props) => {
	const {
		shopifyProduct: product,
		buttonText,
		metafields,
		enableQuantity = true,
		enableSubscription = true,
		enableFavorites,
		enableOkendoStarRating,
	} = props

	const {
		price,
		compareAtPrice,
		variant,
		selectedOptions,
		handleOptionChange,
		image,
		images,
		handleImageClick,
	} = useProductDetails({
		product,
	})

	return (
		<Stack spacing={0} direction="row" sx={sx.container}>
			<Box sx={sx.left}>
				<ShopifyProductImages
					product={product}
					image={image}
					images={images}
					handleClick={handleImageClick}
				/>
			</Box>
			<Box sx={sx.right}>
				<Stack spacing={2}>
					<ShopifyProductInfo
						product={product}
						price={price}
						compareAtPrice={compareAtPrice}
						enableOkendoStarRating={enableOkendoStarRating}
					/>
					<ShopifyProductVariantSelector
						product={product}
						selectedOptions={selectedOptions}
						handleOptionChange={handleOptionChange}
					/>
					<ShopifyAddToCartButton
						product={product}
						variant={variant}
						enableQuantity={enableQuantity}
						enableSubscription={enableSubscription}
						enableFavorites={enableFavorites}
						label={buttonText}
					/>
					{metafields && (
						<ShopifyProductMetafields 
              product={product} 
              metafields={metafields} 
            />
					)}
					<ShopifyTrackRecentlyViewed product={product} />
				</Stack>
			</Box>
		</Stack>
	)
}

export default ShopifyProductDetails

const sx = {
	container: {
		display: 'flex',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
	},
	left: {
		p: {
			sm: 1,
			xs: 0,
		},
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	right: {
		p: {
			sm: 1,
			xs: 0,
		},
		width: {
			xs: '100%',
			sm: '50%',
		},
	},
	root: {
		px: 0,
	},
	buttons: {
		alignItems: 'flex-end',
	},
}
