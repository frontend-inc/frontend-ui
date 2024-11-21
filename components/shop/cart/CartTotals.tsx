'use client'

import React from 'react'
import { Typography } from '../../../components'
import { useCart } from '../../../hooks'

const CartTotals: React.FC = () => {
	const { cart } = useCart()
	if (cart?.total_items === 0) return null
	return (
		<div className="flex flex-row space-x-2 justify-between">
			<Typography variant="caption">Subtotal</Typography>
			<Typography variant="subtitle2">{cart?.display_subtotal}</Typography>
		</div>
	)
}

export default CartTotals
