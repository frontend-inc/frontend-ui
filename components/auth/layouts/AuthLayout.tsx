'use client'

import React from 'react'
import { Container } from '../../../components'

type AuthLayoutProps = {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children } = props

	return (
		<div className="flex h-full w-full p-4 min-h-screen items-center justify-center">
			<Container maxWidth="sm">{children}</Container>
		</div>
	)
}

export default AuthLayout
