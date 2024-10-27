'use client'

import React, { useRef, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { getCookie } from 'cookies-next'

const AuthCookie: React.FC = () => {
	const { authCookie, authenticateFromToken } = useAuth()

  const mounted = useRef(false)

	useEffect(() => {
    if(!mounted.current) {
      mounted.current = true
      let authToken = getCookie(authCookie)
      if (authToken) {
        authenticateFromToken(String(authToken))
      }
    }
	}, [])

	return null
}

export default AuthCookie
