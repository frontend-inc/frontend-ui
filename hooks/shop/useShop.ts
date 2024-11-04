'use client'

import React, { useContext } from 'react'
import { ShopContext } from '../../context'

const useShop = () => {
	const { 
    cartCookie, 
    cart, 
    setCart, 
    cartOpen, 
    setCartOpen,
    subscriptionOpen,
    setSubscriptionOpen,
    subscriptionPrice,
    subscriptionInterval 
  } = useContext(
		ShopContext
	) as any

	return {
		cart,
		setCart,
		cartOpen,
		setCartOpen,
		cartCookie,
    subscriptionOpen,
    setSubscriptionOpen,
    subscriptionPrice,
    subscriptionInterval 
	}
}

export default useShop
