import React from 'react'
import { SignInButton, Placeholder } from '../../components'

const AuthRequired: React.FC = () => {
	return (
		<Placeholder
			title="Sign In"
			description="Please sign in to view this content."
			actions={<SignInButton buttonText="Login" />}
		/>
	)
}

export default AuthRequired
