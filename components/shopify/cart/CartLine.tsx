import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from 'frontend-shopify'
import { useCart } from 'frontend-shopify'
import { useSegment } from '../../../hooks/addons'
import {
	Badge,
	Box,
	Stack,
	Typography,
	IconButton,
	ListItem,
	ListItemText,
	ListItemIcon,
	ButtonGroup,
	Button,
} from '@mui/material'
import Image from 'next/image'
import { Icon, TouchableOpacity } from '../../../components'
import { formatCurrency } from 'frontend-shopify'
import { useRouter } from 'next/router'
import { CartLine } from 'frontend-shopify'

type CartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: any) => void
	handleRemoveQuantity: (event: any) => void
}

const CartQuantityInput: React.FC<CartQuantityInputProps> = (props) => {
	const { quantity, handleAddQuantity, handleRemoveQuantity } = props

	return (
		<ButtonGroup sx={sx.buttonGroup}>
			<Button sx={sx.button} onClick={handleRemoveQuantity}>
				<Icon name="Minus" size={16} />
			</Button>
			<Button sx={sx.button}>{quantity}</Button>
			<Button sx={sx.button} onClick={handleAddQuantity}>
				<Icon name="Plus" size={16} />
			</Button>
		</ButtonGroup>
	)
}

type CartLineProps = {
	line: CartLine
}

const CartLine: React.FC<CartLineProps> = (props) => {
	const { line } = props

	const router = useRouter()
	const { trackRemoveFromCart } = useSegment()
	const { loading, cartLineRemove, cartLineUpdate } = useCart()
	const { shopUrl, setCartOpen } = useContext(ShopContext) as any

	const { id, quantity, merchandise, sellingPlanAllocation } = line || {}

	const [price, setPrice] = useState(null)
	const [compareAtPrice, setCompareAtPrice] = useState(null)

	const {
		//@ts-ignore
		product,
		price: { amount },
		//@ts-ignore
		compareAtPrice: compareAtAmount,
		image: { url },
	} = merchandise || {}

	const handleUpdateQuantity = async (quantity) => {
		await cartLineUpdate({ id, quantity })
	}

	const handleAddQuantity = () => {
		handleUpdateQuantity(quantity + 1)
	}

	const handleRemoveQuantity = (ev) => {
		if (quantity == 1) {
			handleRemoveLineItem(ev)
		} else {
			handleUpdateQuantity(quantity - 1)
		}
	}

	const handleRemoveLineItem = async (event) => {
		event.stopPropagation()
		await cartLineRemove(id)
		trackRemoveFromCart({
			quantity,
			variant: merchandise,
			product,
		})
	}

	const handleClick = () => {
		router.push(`${shopUrl}/products/${product?.handle}`)
		setCartOpen(false)
	}

	useEffect(() => {
		if (sellingPlanAllocation?.priceAdjustments?.length > 0) {
			setPrice(sellingPlanAllocation.priceAdjustments[0].price.amount)
			setCompareAtPrice(
				sellingPlanAllocation.priceAdjustments[0].compareAtPrice.amount
			)
		} else {
			setPrice(amount)
			setCompareAtPrice(compareAtAmount?.amount)
		}
	}, [price, sellingPlanAllocation])

	return (
		<ListItem
			disableGutters
			sx={{
				...sx.root,
				...(loading && sx.loading),
			}}
			secondaryAction={
				<IconButton onClick={handleRemoveLineItem} size="small">
					<Icon name="X" size={20} />
				</IconButton>
			}
		>
			<ListItemIcon sx={sx.listItemIcon}>
				<Badge badgeContent={quantity} color="secondary">
					<TouchableOpacity handleClick={handleClick}>
						<Image
							alt={
								//@ts-ignore
								line?.merchandise?.product?.title
							}
							src={url}
							height={96}
							width={96}
						/>
					</TouchableOpacity>
				</Badge>
			</ListItemIcon>
			<ListItemText
				primary={
					//@ts-ignore
					line?.merchandise?.product?.title
				}
				secondary={
					<Stack spacing={0.5}>
						<Typography variant="body2">
							{line?.merchandise?.selectedOptions
								?.filter((option) => option.name != 'Title')
								?.map((option, i) => option.value)
								.join(' / ')}
						</Typography>
						{sellingPlanAllocation?.sellingPlan && (
							<Typography variant="body2" sx={sx.subscription}>
								{sellingPlanAllocation?.sellingPlan?.name}
							</Typography>
						)}
						<Stack direction="row" spacing={1}>
							<Typography variant="body2">
								{price == 0 ? 'Free' : formatCurrency(price)}{' '}
							</Typography>
						</Stack>
						<Box>
							<CartQuantityInput
								quantity={quantity}
								handleAddQuantity={handleAddQuantity}
								handleRemoveQuantity={handleRemoveQuantity}
							/>
						</Box>
					</Stack>
				}
			/>
		</ListItem>
	)
}

export default CartLine

const sx = {
	root: {},
	loading: {
		opacity: 0.3,
	},
	listItemIcon: {
		mr: 2,
	},
	buttonGroup: {
		bgcolor: 'tertiary.main',
		height: '28px',
		'& .MuiButton-root': {
			minWidth: '28px',
		},
	},
	button: {
		px: 0,
		color: 'text.primary',
		border: 'none',
		'&:hover': {
			border: 'none',
		},
		fontSize: (theme) => theme.typography.overline.fontSize,
	},
	subscription: {
		fontStyle: 'italic',
	},
	compareAtPrice: {
		textDecoration: 'line-through',
		color: 'text.secondary',
		opacity: 0.6,
		fontSize: 12,
	},
	secondaryAction: {
		height: '100%',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
}
