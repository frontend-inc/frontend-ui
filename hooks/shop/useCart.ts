import React, { useState, useEffect } from 'react'
import { useApi, useAuth } from 'frontend-js'
import { useShop } from '../../hooks'
import { setCookie, getCookie } from 'cookies-next'
import { CartType } from '../../types'

const useCart = () => {
	const { api } = useApi()

	const { 
    cartCookie, 
    cart, 
    setCart, 
    cartOpen, 
    setCartOpen 
  } = useShop()

	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)

	const apiParams = {
		url: '/api/v1/shop/carts',
		name: 'cart',
	}

  const [cartId, setCartId] = useState(getCookie(cartCookie))
	
  const fetchCart = async (cartId) => {
		return await loadingWrapper(() => api.fetchCart(cartId, apiParams))
	}

	const createCart = async () => {
		return await loadingWrapper(() => api.createCart(apiParams))
	}

	const addToCart = async (productId, quantity = 1) => {
    if(!cartId) return "Cart not found";
		return await loadingWrapper(() =>
			api.addToCart(cartId, productId, quantity, apiParams)
		)
	}

	const removeFromCart = async (productId) => {
    if(!cartId) return "Cart not found";
		return await loadingWrapper(() => api.removeFromCart(cartId, productId, apiParams))
	}

	const addQuantity = async (productId) => {
    if(!cartId) return "Cart not found";
		return await loadingWrapper(() => api.addQuantity(cartId, productId, apiParams))
	}

	const removeQuantity = async (productId) => {
    if(!cartId) return "Cart not found";
		return await loadingWrapper(() => api.removeQuantity(cartId, productId, apiParams))
	}

	const checkout = async (options) => {
		try {
      if(!cartId) return "Cart not found";
			setLoading(true)
			return await api.checkout(cartId, options, apiParams)
		} catch (error) {
			console.log(error)
			setErrors(error)
		} finally {
			setLoading(false)
		}
	}

  const handleCreateCart = async () => {
    let resp: any = await createCart()
    if(resp?.data?.uid) {       
      setCartId(resp?.data?.uid)
      setCookie(cartCookie, resp?.data?.uid)
    }
  }

	const loadingWrapper = async (fn) => {
		try {
			setErrors(null)
			setLoading(true)
			const resp = await fn()
			if (resp?.data?.id) {
				setCart(resp.data)
			}
		} catch (error) {
			console.log(error)
			setErrors(error)
		} finally {
			setLoading(false)
		}
	}
  
  useEffect(() => {
    let cartUid = getCookie(cartCookie)    
    if(!cartUid) {
      handleCreateCart()
    } else {
      setCartId(cartUid)
    }
  }, [cartCookie])

	return {
    cartCookie,
		loading,
		errors,
    createCart,
		fetchCart,
		cart,
		cartOpen,
		setCartOpen,
		setCart,
		addToCart,
		removeFromCart,
		addQuantity,
		removeQuantity,
		checkout,
	}
}

export default useCart
