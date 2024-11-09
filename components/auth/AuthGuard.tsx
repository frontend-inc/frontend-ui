'use client'

import React from 'react'
import { useAuth } from 'frontend-js'
import { AuthWall } from '..'

export type AuthGuardProps = {
	children: React.ReactNode
	requireAuth?: boolean
}

const AuthGuard: React.FC<AuthGuardProps> = (props) => {
	const { children, requireAuth = false } = props
	const { currentUser } = useAuth()

	if (requireAuth && !currentUser?.id) {
		return <AuthWall />
	}
	return children
}

export default AuthGuard
