'use client'

import React, { useEffect, useRef } from 'react'
import { useCart } from '../../../hooks'
import { getCookie, setCookie } from 'cookies-next'

type CartCookieProps = {
	icon?: string
}

const CartCookie: React.FC<CartCookieProps> = () => {

  const mounted = useRef(false)

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

	useEffect(() => {
    if(!mounted.current) {
      mounted.current = true    
			handleFindOrCreateCart()
		}
	}, [])

	return null
}

export default CartCookie
