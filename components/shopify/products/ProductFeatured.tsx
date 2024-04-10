import React, { useEffect } from 'react'
import { AddToCartButton, QuickShopButton } from '..'
import { Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import SwipeableProductImages from './images/SwipeableProductImages'
import { formatCurrency } from 'frontend-shopify'
import { useProducts } from 'frontend-shopify'

export type ProductFeaturedProps = {
	handle: string
	flexDirection?: 'row' | 'row-reverse'
	handleClick?: () => void
	buttonText?: string
	quickShopButtonText?: string
	height?: number
	width?: number
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
}

const ProductFeatured: React.FC<ProductFeaturedProps> = (props) => {
	const {
		handle,
		flexDirection = 'row',
		height = 360,
		width = 360,
		buttonText = 'Add to Cart',
		quickShopButtonText = 'Quick Shop',
		handleClick,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
		enableQuickShop = false,
	} = props || {}

	const { loading, product, findProduct } = useProducts()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		}
	}

	useEffect(() => {
		if (handle) {
			findProduct(handle)
		}
	}, [handle])

	if (!product) return null
	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack direction={{ sm: flexDirection, sx: 'column' }}>
				<Box sx={sx.images}>
					<SwipeableProductImages
						product={product}
						height={height}
						width={width}
						handleClick={handleItemClick}
					/>
				</Box>
				<Stack spacing={2} sx={sx.content}>
					<Box>
						<Typography color="textPrimary" variant="h3">
							{product?.title}
						</Typography>
						<Typography
							color="textSecondary"
							variant="body2"
							sx={sx.description}
						>
							{truncate(product?.description, 60)}
						</Typography>
						<Typography color="textSecondary" variant="body2">
							{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
						</Typography>
					</Box>
					<Stack
						direction={
							enableAddToCart && enableQuickShop && !enableQuantity
								? 'row'
								: 'column'
						}
						spacing={1}
					>
						{enableAddToCart && (
							<AddToCartButton
								product={product}
								variant={product?.variants?.edges[0]?.node}
								enableQuantity={enableQuantity}
								label={buttonText}
							/>
						)}
						{enableQuickShop && (
							<QuickShopButton
								size="large"
								product={product}
								color={enableAddToCart ? 'secondary' : 'primary'}
								buttonText={buttonText}
								quickShopButtonText={quickShopButtonText}
							/>
						)}
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default ProductFeatured

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 1,
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: '100%',
	},
	description: {
		maxWidth: '320px',
	},
	images: {
		px: 1,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
}
