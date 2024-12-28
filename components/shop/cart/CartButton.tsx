'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
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
			<Button 
        isIconOnly 
        variant='light'
        onPress={() => setCartOpen(!cartOpen)}
      >
				<RemixIcon name={icon} size="lg" />
			</Button>
      { cart?.total_items > 0 && (
        <Badge className="py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]">
          {cart?.total_items}
        </Badge>
      )}
		</div>
	)
}

export default CartButton
