import React, { useState } from 'react'
import { ProductModal, AddToCartButton } from '../../../components/shopify'
import { Button, Box, Stack, Typography } from '@mui/material'
import { truncate } from '../../../helpers'
import {
	PRODUCT_CARD_HORIZ_HEIGHT,
	PRODUCT_CARD_HORIZ_WIDTH,
} from '../../../constants/index'
import SwipeableProductImages from './images/SwipeableProductImages'
import { formatCurrency } from 'frontend-shopify'
import { Product } from 'frontend-shopify'

type ProductCardProps = {
	product: Product
	handleClick?: () => void
	buttonText?: string
	height?: number
	width?: number
	enableBorder?: boolean
	enableAddToCart?: boolean
	enableQuantity?: boolean
	enableQuickShop?: boolean
}

const ProductCardHoriz: React.FC<ProductCardProps> = (props) => {
	const {
		product,
		height = PRODUCT_CARD_HORIZ_HEIGHT,
		width = PRODUCT_CARD_HORIZ_WIDTH,
		buttonText = 'Add to Cart',
		handleClick,
		enableBorder = false,
		enableAddToCart = false,
		enableQuantity = false,
		enableQuickShop = false,
	} = props || {}

	const [open, setOpen] = useState(false)

	const handleQuickShop = () => {
		setOpen(true)
	}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
			}}
		>
			<Stack direction="row" spacing={2}>
          <Box sx={{
            maxWidth: `${width}px`,
          }}>
          <SwipeableProductImages
            product={product}
            height={height}
            width={width}
            handleClick={handleItemClick}
          />
        </Box>
				<Stack spacing={2} sx={sx.content}>
					<Box>
						<Typography color="textPrimary" variant="subtitle1">
							{truncate(product?.title)}
						</Typography>
						<Typography
							color="textSecondary"
							variant="body2"
							sx={sx.description}
						>
							{truncate(product?.description, 36)}
						</Typography>
						<Typography color="textSecondary" variant="body2">
							{formatCurrency(product?.priceRange?.minVariantPrice?.amount)}
						</Typography>
					</Box>
					{enableAddToCart && (
						<Stack direction="row" spacing={1}>
							<AddToCartButton
								size="small"
								product={product}
								variant={
                  //@ts-ignore
                  product?.variants?.edges[0]?.node
                }
								enableQuantity={enableQuantity}
								label={buttonText}
							/>
							{enableQuickShop && (
								<Button
									size="small"
									variant={enableAddToCart ? 'outlined' : 'contained'}
									onClick={handleQuickShop}
								>
									Quick Shop
								</Button>
							)}
						</Stack>
					)}
				</Stack>
			</Stack>
			<ProductModal
				open={open}
				handleClose={() => setOpen(false)}
				handle={product?.handle}
				enableQuantity={enableQuantity}
				buttonText={buttonText}
			/>
		</Box>
	)
}

export default ProductCardHoriz

const sx = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		overflow: 'hidden',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	image: {
		mr: 2,
		width: 120,
		height: '100%',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: '100%',
	},
	description: {
		maxWidth: '320px',
	},
}
