import React, { useContext } from 'react'
import { Button, Badge, IconButton } from '@mui/material'
import { ShopContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'

type CartButtonProps = {
	icon?: string
	editing?: boolean
	label?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const {
		label = 'Cart',
		editing = false,
		icon = 'ShoppingCart',
	} = props
	
  const { cart, toggleCart } = useContext(ShopContext) as any;
  const { setMenuOpen  } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		if (!editing) {
			toggleCart()
		}
	}

	return (
    <IconButton onClick={handleCartClick} sx={sx.root}>
      <Badge color="primary" badgeContent={cart?.totalQuantity}>
        <Icon name={icon} size={24} color="text.primary" />
      </Badge>
    </IconButton>
			
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
}
