'use client'

import React from 'react'
import { IconButton } from '../../../components'
import { useCart } from '../../../hooks'
import { RemixIcon } from '../../../components'
import { Badge } from 'frontend-shadcn'

type CartButtonProps = {
	icon?: string
}

const CartButton: React.FC<CartButtonProps> = (props) => {
	const { icon = 'ri-shopping-bag-2-line' } = props
	const { cart, cartOpen, setCartOpen } = useCart()

	return (
		<div className="relative">
			<IconButton onClick={() => setCartOpen(!cartOpen)}>
				<RemixIcon name={icon} size="lg" />
			</IconButton>
			<Badge className="py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]">
				{cart?.total_items}
			</Badge>
		</div>
	)
}

export default CartButton
