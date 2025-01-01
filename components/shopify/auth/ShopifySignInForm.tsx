'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { TextInput, IconLoading } from '../..'
import { ShopifyCustomerType } from 'frontend-shopify'

type SignInFormProps = {
	errors?: any
	loading?: boolean
	customer: ShopifyCustomerType
	handleChange: (ev: any) => void
	handleSubmit: () => void
	handleForgotPassword: () => void
	handleSignup: () => void
}

const SignInForm: React.FC<SignInFormProps> = (props) => {
	const {
		errors,
		loading = false,
		customer,
		handleChange,
		handleSubmit,
		handleForgotPassword,
		handleSignup,
	} = props

	return (
		<div className="flex flex-col space-y-4">
			<TextInput
				errors={errors}
				name="email"
				value={customer?.email}
				placeholder="Email"
				handleChange={handleChange}
			/>
			<TextInput
				errors={errors}
				name="password"
				value={customer?.password}
				type="password"
				placeholder="Password"
				handleChange={handleChange}
			/>
			<Button 
        fullWidth 
        onPress={handleSubmit} 
        disabled={loading}
        isLoading={loading}
      >
				Sign In				
			</Button>
			{handleSignup && (
				<Button fullWidth variant="ghost" onPress={handleSignup}>
					No account? Sign up
				</Button>
			)}
			{handleForgotPassword && (
				<Button
          fullWidth
					variant="ghost"
					onPress={handleForgotPassword}
				>
					Forgot password?
				</Button>
			)}
		</div>
	)
}

export default SignInForm
