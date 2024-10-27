'use client'

import React, { useEffect, useState } from 'react'
import { useCart } from '../../../hooks'
import { getCookie, setCookie } from 'cookies-next'
import { useDebounce } from 'use-debounce'

type CartCookieProps = {
	icon?: string
}

const CartCookie: React.FC<CartCookieProps> = () => {

	const [loaded, setLoaded] = useState(false)
	const [debouncedLoaded] = useDebounce(loaded, 1000)

	const { cart, fetchCart, createCart, cartCookie } = useCart()

	const handleFindOrCreateCart = async () => {
		if (cartCookie?.length > 0 && !cart?.uid) {
			let createResp
			let cartUID = await getCookie(cartCookie)
			if (cartUID && cartUID !== undefined) {
				let fetchResp = await fetchCart(cartUID)
				if (!fetchResp?.uid) {
					createResp = await createCart()
					if (createResp?.uid) {
						setCookie(cartCookie, createResp?.uid)
					}
				}
			} else {
				createResp = await createCart()
				if (createResp?.uid) {
					setCookie(cartCookie, createResp?.uid)
				}
			}
		}
	}

	// Fix: We create an artificial useEffect
	// since handleFindOrCreateCart event was firing twice
	// for unknown reasons
	useEffect(() => {
		setLoaded(true)
	}, [])

	useEffect(() => {
		if (debouncedLoaded == true) {
			handleFindOrCreateCart()
		}
	}, [debouncedLoaded])

	return null
}

export default CartCookie
