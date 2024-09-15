import React, { useState, useEffect } from 'react'
import { useApi, useAuth } from 'frontend-js'
import { useShop } from '../../hooks'
import useSWR from 'swr'

const useCart = () => {
	const { api } = useApi()

	const { cart, setCart, cartOpen, setCartOpen } = useShop()

	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null)

	const apiParams = {
		url: '/api/v1/shop/carts',
		name: 'cart',
	}

	const { currentUser } = useAuth()
	const cacheKey = cartOpen && currentUser?.id ? true : false
	const fetcher = () => loadingWrapper(() => api.fetchCart(apiParams))
	useSWR([cacheKey], fetcher, {
		revalidateOnFocus: true,
		revalidateOnReconnect: true,
	})

	const fetchCart = async () => {
		return await loadingWrapper(() => api.fetchCart(apiParams))
	}

	const addToCart = async (productId, quantity = 1) => {
		return await loadingWrapper(() =>
			api.addToCart(productId, quantity, apiParams)
		)
	}

	const removeFromCart = async (productId) => {
		return await loadingWrapper(() => api.removeFromCart(productId, apiParams))
	}

	const addQuantity = async (productId) => {
		return await loadingWrapper(() => api.addQuantity(productId, apiParams))
	}

	const removeQuantity = async (productId) => {
		return await loadingWrapper(() => api.removeQuantity(productId, apiParams))
	}

	const checkout = async (options) => {
		try {
			setLoading(true)
			return await api.checkout(cart?.id, options, apiParams)
		} catch (error) {
			console.log(error)
			setErrors(error)
		} finally {
			setLoading(false)
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

	return {
		loading,
		errors,
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
