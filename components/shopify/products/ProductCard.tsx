import React, { useState, useContext } from 'react'
import { Fade, Button, Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import { PRODUCT_CARD_HEIGHT } from '../../../constants/index'
import { ProductType } from 'frontend-shopify'
import { ShopContext } from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import SwipeableProductImages from './images/SwipeableProductImages'
import { ProductModal, AddToCartButton } from '..'
import { OkendoStarRating } from '../../addons'

type ProductCardProps = {
	product: ProductType
	handleClick?: () => void
	buttonText?: string
	height?: number
	width?: number
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
	enableOkendoStarRating?: boolean
	buttonVariant?: 'contained' | 'outlined' | 'text'
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
	const {
		product,
		handleClick,
		height = PRODUCT_CARD_HEIGHT,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
		enableQuickShop = false,
		enableOkendoStarRating = false,
		buttonVariant = 'contained',
		buttonText,
	} = props || {}

	const [open, setOpen] = useState(false)
	const { setSearchOpen } = useContext(ShopContext) as any

	const handleQuickShop = () => {
		setOpen(true)
	}

	const handleItemClick = () => {
		if (handleClick) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
			setSearchOpen(false)
			handleClick()
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<SwipeableProductImages
				product={product}
				height={height}
				handleClick={handleItemClick}
			/>
			<Stack
				spacing={1}
				sx={{
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Stack
					spacing={0.5}
					direction="column"
					sx={{
						...sx.text,
						...(enableOkendoStarRating && sx.textWithReviews),
					}}
				>
					<Typography color="textPrimary" variant="subtitle1">
						{truncate(product?.title)}
					</Typography>
					{enableOkendoStarRating && <OkendoStarRating product={product} />}
					<Typography color="textSecondary" variant="body2">
						{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
					</Typography>
				</Stack>
				<Stack spacing={1} direction="column">
					{enableAddToCart && (
						<AddToCartButton
							product={product}
							variant={
								//@ts-ignore
								product?.variants?.edges[0]?.node
							}
							label={buttonText}
							enableQuantity={enableQuantity}
							buttonVariant={buttonVariant}
							size="small"
						/>
					)}
					{enableQuickShop && (
						<Button
							color={enableAddToCart ? 'primary' : 'secondary'}
							onClick={handleQuickShop}
						>
							Quick Shop
						</Button>
					)}
				</Stack>
			</Stack>
			<ProductModal
				open={open}
				handleClose={() => setOpen(false)}
				shopifyProduct={product}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</Box>
	)
}

export default ProductCard

const sx = {
	root: {
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	text: {
		height: '80px',
	},
	textWithReviews: {
		height: '110px',
	},
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
}
