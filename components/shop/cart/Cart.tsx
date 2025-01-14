'use client'

import React from 'react'
import { useCart } from '../../../hooks'
import { Sheet } from '../../../components'
import CartLineItems from './CartLineItems'
import CheckoutButton from './CheckoutButton'

const Cart: React.FC = () => {
	const { cartOpen, setCartOpen } = useCart()

	return (
		<Sheet
			open={cartOpen}
			handleClose={() => setCartOpen(false)}
			title="My Cart"
			buttons={
        <CheckoutButton />
      }
		>
			<CartLineItems />
		</Sheet>
	)
}

export default Cart
