import React, { useState } from 'react'
import ShopContext from './ShopContext'
import { CartType } from '../types'

type ShopProviderProps = {
	children: React.ReactNode
}

const ShopProvider = (props: ShopProviderProps) => {
	const { children } = props || {}

	const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<CartType>()  

	const value = {
		cart,
    setCart,
		cartOpen,
		setCartOpen,
	}

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
