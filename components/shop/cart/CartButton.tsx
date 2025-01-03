'use client'

import React from 'react'
import { Badge, Button } from '@nextui-org/react'
import { useCart } from '../../../hooks'
import { RemixIcon } from '../../../components'

type CartButtonProps = {
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { icon = 'ri-shopping-bag-2-line' } = props
	const { cart, cartOpen, setCartOpen } = useCart()

	return (
		<Badge color="primary" content={cart?.total_items}>
			<Button
				isIconOnly
				variant="light"
				className="min-w-8"
				onPress={() => setCartOpen(!cartOpen)}
			>
				<RemixIcon name={icon} size="lg" />
			</Button>
		</Badge>
	)
}

export default CartButton
