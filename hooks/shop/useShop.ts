import React, { useContext } from 'react'
import { ShopContext } from '../../context'

const useShop = () => {

  const {
    cart,
    setCart,
    cartOpen,
    setCartOpen,
  } = useContext(ShopContext) as any 

  return {
    cart,
    setCart,
    cartOpen,
    setCartOpen,
  }
}

export default useShop