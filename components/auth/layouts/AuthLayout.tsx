'use client'

import React from 'react'

type AuthLayoutProps = {
	children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
	const { children } = props

	return (
		<div className="w-full container mx-auto">
			{children}
		</div>
	)
}

export default AuthLayout
