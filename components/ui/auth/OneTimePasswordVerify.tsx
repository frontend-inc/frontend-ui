import React, { useState, useEffect } from 'react'
import {
	AuthScreen,
	Loader,
	OneTimePasswordVerifyMessage,
} from '../../../components'
import { useAuth } from 'frontend-js'

import { useRouter } from 'next/router'

type OneTimePasswordVerifyProps = {
	redirectUrl: string
	title?: string
	subtitle?: string
	loginUrl?: string
}

const OneTimePasswordVerify: React.FC<OneTimePasswordVerifyProps> = (props) => {
	const router = useRouter()
	const { token: oneTimePassword } = router.query

	const [verified, setVerified] = useState(false)

	const {
		redirectUrl,
		title = 'One-Time Password',
		subtitle = 'Get a one-time password link',
		loginUrl,
	} = props || {}

	const { errors, loading, verifyOneTimePassword } = useAuth()

	const handleVerifyOTP = async () => {
		let resp = await verifyOneTimePassword(String(oneTimePassword))
		if (resp?.id) {
			setVerified(true)
		} else {
			setVerified(false)
		}
	}

	const handleRedirect = () => {
		router.push(redirectUrl)
	}

	const handleLogin = () => {
		router.push(loginUrl)
	}

	useEffect(() => {
		if (oneTimePassword) {
			handleVerifyOTP()
		}
	}, [oneTimePassword])

	return (
    <>
		  <Loader loading={loading} />
			<AuthScreen title={title} subtitle={subtitle}>
				<OneTimePasswordVerifyMessage
					verified={verified}
					handleRedirect={handleRedirect}
					handleLogin={handleLogin}
				/>
			</AuthScreen>
		</>
	)
}

export default OneTimePasswordVerify
