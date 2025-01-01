'use client'

import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { RemixIcon } from '../../../components'
import { Button } from '@nextui-org/react'
import { Badge } from '@nextui-org/react'

type ShopifyCartButtonProps = {
	icon?: string
}

export default function ShopifyCartButton(props: ShopifyCartButtonProps) {
	const { icon = 'ri-shopping-cart-2-line' } = props || {}
	const { cart, toggleCart } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		toggleCart()
	}
	return (
    <Badge content={ cart?.totalQuantity}>
      <Button isIconOnly onPress={handleCartClick}>
        <RemixIcon name={icon} size="lg" />
      </Button>
    </Badge>      
	)
}
