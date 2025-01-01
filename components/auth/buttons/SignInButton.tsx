'use client'

import React, { useEffect, useContext } from 'react'
import { Button } from '@nextui-org/react'
import { useAuth } from 'frontend-js'
import { AppContext } from '../../../context'

export type SignInButtonProps = {
	buttonText?: string
}

const SignInButton: React.FC<SignInButtonProps> = (props) => {
	const { buttonText = 'Sign In' } = props || {}

	const { currentUser } = useAuth()

	const { setAuthOpen } = useContext(AppContext)

	const handleLogin = () => {
		setAuthOpen(true)
	}

	if (currentUser?.id) return null
	return (
		<Button 
      fullWidth 
      variant="solid"
      color="primary"
      onPress={handleLogin}
    >
			{buttonText}
		</Button>
	)
}

export default SignInButton
