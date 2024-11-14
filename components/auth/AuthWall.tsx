'use client'

import React from 'react'
import { Placeholder } from '../../components'
import { Button } from '../../components'
import { useApp } from '../../hooks'

const AuthWall: React.FC = () => {
	const { setAuthOpen } = useApp()

	const handleLoginClick = () => {
		setAuthOpen(true)
	}

	return (
		<div className="container mx-auto max-w-screen-md">
			<Placeholder      
				title="Sign in to view content"
				description="You are not logged in."
				buttons={<Button onClick={handleLoginClick}> Sign in</Button>}
			/>
		</div>
	)
}

export default AuthWall
