import React, { useState, useEffect } from 'react'
import {
	Badge,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { Icon } from '../../../components'
import { useCart } from '../../../hooks'
import { getCookie, setCookie } from 'cookies-next'

type CartIconButtonProps = {
	icon?: string
	totalItems: number
	handleClick: () => void
}

const CartIconButton: React.FC<CartIconButtonProps> = (props) => {
	const { totalItems, handleClick, icon = 'ShoppingBag' } = props

	return (
		<IconButton onClick={handleClick}>
			<Badge color="primary" badgeContent={totalItems}>
				<Icon name={icon} size={24} />
			</Badge>
		</IconButton>
	)
}

type CartBtnProps = {
	label?: string
	icon?: string
	totalItems?: number
	handleClick?: () => void
}

const CartBtn: React.FC<CartBtnProps> = (props) => {
	const {
		label = 'Cart',
		icon = 'ShoppingBag',
		totalItems,
		handleClick,
	} = props

	return (
		<ListItem
			disablePadding
			disableGutters
			secondaryAction={
				<Badge badgeContent={totalItems} color="primary" sx={sx.badge} />
			}
		>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Icon name={icon} />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography variant="body1" color="text.primary">
							{label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

type CartButtonProps = {
	label?: string
	variant?: 'icon' | 'button'
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { variant = 'icon', label, icon = 'ShoppingBag' } = props
  
	const { cartCookie, cart, cartOpen, setCartOpen, createCart, fetchCart } = useCart()
  
  const [cartId, setCartId] = useState(String(getCookie(cartCookie)))

  useEffect(() => {
    if(!cartId) {      
      createCart()      
    }else{
      fetchCart(cartId)
    }
  }, [cartId])

  useEffect(() => {
    if(cartCookie && cart?.uid) {
      setCartId(cart?.uid)
      setCookie(cartCookie, cart?.uid)
    }
  }, [cartCookie, cart?.uid])

	return variant == 'icon' ? (
		<CartIconButton
			icon={icon}
			handleClick={() => setCartOpen(!cartOpen)}
			totalItems={cart?.total_items}
		/>
	) : (
		<CartBtn
			icon={icon}
			label={label}
			handleClick={() => setCartOpen(!cartOpen)}
			totalItems={cart?.total_items}
		/>
	)
}

export default CartButton

const sx = {
	root: {
		pr: 1.5, // Space for the badge count
	},
	button: {
		width: '100%',
		color: 'text.primary',
		justifyContent: 'flex-start',
	},
	listItemButton: {
		px: 1,
	},
	badge: {
		mr: 1,
	},
}
