import React from 'react'
import { SignInButton } from '../../../components'
import { SignInButtonProps } from './SignInButton'

const SignUpButton: React.FC<SignInButtonProps> = (props) => {
	const { showIcon, buttonText = 'Sign Up' } = props

	return <SignInButton showIcon={showIcon} buttonText={buttonText} />
}

export default SignUpButton
