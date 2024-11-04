'use client'

import React, { useState } from 'react'
import ShopContext from './ShopContext'
import { CartType } from '../types'

type ShopProviderProps = {
	cartCookie: string
  subscriptionPrice?: number
	children: React.ReactNode
}

const ShopProvider = (props: ShopProviderProps) => {
	
  const { 
    children, 
    cartCookie,
    subscriptionPrice
  } = props || {}

	const [cartOpen, setCartOpen] = useState(false)
  const [subscribeOpen, setSubscribeOpen] = useState(false)
	const [cart, setCart] = useState<CartType | {}>({})

	const value = {
		cart,
		setCart,
		cartOpen,
		setCartOpen,
		cartCookie,   
    subscribeOpen,
    setSubscribeOpen,
    subscriptionPrice 
	}

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
