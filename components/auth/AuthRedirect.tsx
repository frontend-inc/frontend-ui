'use client'

import React, { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type AuthRedirectProps = {
	redirectUrl: string
}

const AuthRedirect: React.FC<AuthRedirectProps> = (props) => {
	const { redirectUrl = '/login' } = props || {}

	const router = useRouter()
	const { fetchMe } = useAuth()

	const handleAuthenticate = async () => {
		let resp = await fetchMe()
		if (!resp?.id) {
			toast('Please login to continue')
			router.push(redirectUrl)
		}
	}

	useEffect(() => {
		handleAuthenticate()
	}, [])

	return null
}

export default AuthRedirect
