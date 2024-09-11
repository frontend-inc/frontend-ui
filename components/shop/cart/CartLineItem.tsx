import React from 'react'
import { useApp, useCart } from '../../../hooks'
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
import { Image, Icon } from '../../../components'
import { useRouter } from 'next/router'
import { LineItemType } from '../../../types'

type CartQuantityInputProps = {
	quantity: number
	handleAddQuantity: (event: any) => void
	handleRemoveQuantity: (event: any) => void
}

const CartQuantityInput: React.FC<CartQuantityInputProps> = (
	props
) => {
	const { quantity, handleAddQuantity, handleRemoveQuantity } = props

	return (
		<ButtonGroup color="secondary" variant="contained" sx={sx.buttonGroup}>
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

type CartLineItemProps = {
	lineItem: LineItemType
}

const CartLineItem: React.FC<CartLineItemProps> = (props) => {
	const { lineItem } = props

	const router = useRouter()
	const { clientUrl } = useApp()

	const { 
    loading, 
    addQuantity, 
    removeQuantity, 
    removeFromCart  
  } = useCart()

	const { setCartOpen } = useCart()

	const { id, quantity, product } = lineItem || {}
	
	const handleAddQuantity = async () => {
		await addQuantity(product?.id)
	}

	const handleRemoveQuantity = async () => {
		await removeQuantity(product?.id)
	}

	const handleRemoveFromCart = async () => {
		await removeFromCart(product?.id)
	}

	const handleClick = () => {
		router.push(`${clientUrl}/products/${product?.handle}`)
		setCartOpen(false)
	}

	return (
		<ListItem
			disableGutters
			sx={{
				...sx.root,
				...(loading && sx.loading),
			}}
			secondaryAction={
				<IconButton onClick={handleRemoveFromCart} size="small">
					<Icon name="X" />
				</IconButton>
			}
		>
			<ListItemIcon sx={sx.listItemIcon}>
				<Badge badgeContent={quantity} color="secondary">					
          <Box sx={ sx.image }>
            <Image
              alt={product?.title || ''}
              src={product?.image?.url}
              height={96}
              width={96}
              handleClick={ handleClick }
            />		
          </Box>			
				</Badge>
			</ListItemIcon>
			<ListItemText
				primary={product?.title}
				secondary={
					<Stack spacing={0.5}>
						<Stack direction="row" spacing={1}>
							<Typography variant="body2">
								{ product?.display_price }
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

export default CartLineItem

const sx = {
	root: {},
	loading: {
		opacity: 0.3,
	},
	listItemIcon: {
		mr: 2,
		width: 96,
	},
	buttonGroup: {
		height: '28px',
		'& .MuiButton-root': {
			minWidth: '28px',
		},
	},
	button: {
		px: 0,
		color: 'text.primary',
		border: 'none !important',
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
  image: {
    width: 96,
    height: 96,
  }
}
