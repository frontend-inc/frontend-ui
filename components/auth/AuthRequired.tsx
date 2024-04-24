import React from 'react'
import { useAuth } from 'frontend-js'
import { SignInButton, Placeholder } from '../../components'

export type AuthRequiredProps = {
  children: React.ReactNode
}

const AuthRequired: React.FC<AuthRequiredProps> = (props) => {

  const { children } = props 
  const { currentUser } = useAuth()

  if(currentUser?.id) return children;
	return (
    <Placeholder
      title="Sign In"
      description="Please sign in to view this content."
      actions={<SignInButton buttonText="Login" />}
    />
	)
}

export default AuthRequired
