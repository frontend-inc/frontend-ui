'use client'

import React from 'react'
import { Badge, IconButton } from '../../core'
import { useCart } from '../../../hooks'
import { Icon } from '../../../components'

type CartButtonProps = {
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { icon = 'ShoppingBag' } = props
	const { cart, cartOpen, setCartOpen } = useCart()

	return (
		<IconButton onClick={() => setCartOpen(!cartOpen)}>
			<Badge badgeContent={cart?.total_items}>
				<Icon name={icon} size={24} />
			</Badge>
		</IconButton>
	)
}

export default CartButton
