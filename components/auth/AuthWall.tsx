'use client'

import React from 'react'
import { Empty } from '../../components'
import { Button } from '@nextui-org/react'
import { useApp } from '../../hooks'

const AuthWall: React.FC = () => {
	const { setAuthOpen } = useApp()

	const handleLoginClick = () => {
		setAuthOpen(true)
	}

	return (
		<div className="container mx-auto max-w-screen-md">
			<Empty
				title="Sign in to view content"
				description="You are not logged in."
				buttons={
          <Button 
            variant="solid"
            color="primary"
            onPress={handleLoginClick}
          >
            Sign in
          </Button>
      }
			/>
		</div>
	)
}

export default AuthWall
