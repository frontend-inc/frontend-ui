'use client'

import React, { useContext } from 'react'
import { ShopifyContext } from 'frontend-shopify'
import { AppContext } from '../../../context'
import { Icon } from '../../../components'
import { IconButton } from '../../core'
import { Badge } from 'frontend-shadcn'

type ShopifyCartButtonProps = {
	icon?: string
}

export default function ShopifyCartButton({
	icon = 'ShoppingCart',
}: ShopifyCartButtonProps) {
	const { cart, toggleCart } = useContext(ShopifyContext) as any
	const { setMenuOpen } = useContext(AppContext)

	const handleCartClick = () => {
		setMenuOpen(false)
		toggleCart()
	}
	return (
		<div className="relative">
			<IconButton onClick={handleCartClick}>
				<Icon name={icon} />
			</IconButton>
			<Badge className="py-0 px-1 rounded-full absolute top-0 right-0 transform translate-x-[3px] -translate-y-[3px]">
				{cart?.totalQuantity}
			</Badge>
		</div>
	)
}
